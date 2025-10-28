import { NextRequest } from 'next/server';

// 👇 Force cette route à tourner en Node.js (accès à process.env OK)
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'MISSING_OPENAI_API_KEY' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content:
              "Tu es un assistant qui examine rationnellement la question suivante : la biologie peut-elle suffire à expliquer la conscience ? Tu réponds avec pédagogie, sans prosélytisme, en proposant des arguments et contre-arguments clairs.",
          },
          ...messages,
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return new Response(
        JSON.stringify({
          error: 'OPENAI_UPSTREAM_ERROR',
          status: response.status,
          detail,
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content ?? "Désolé, je n'ai pas de réponse.";
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ error: 'UNEXPECTED', detail: String(e?.message || e) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
