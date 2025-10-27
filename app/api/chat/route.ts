import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // System prompt specialized for the user's theme
    const system = "Tu es un assistant qui examine rationnellement la question suivante : la biologie peut-elle suffire à expliquer la conscience ? Tu réponds avec pédagogie, sans prosélytisme, en proposant des arguments et contre-arguments clairs.";

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Missing OPENAI_API_KEY' }), { status: 500 });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: system },
          ...messages
        ],
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      const text = await response.text();
      return new Response(JSON.stringify({ error: 'OpenAI error', details: text }), { status: 500 });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "Désolé, je n'ai pas de réponse.";

    return new Response(JSON.stringify({ reply }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || 'Unknown error' }), { status: 500 });
  }
}
