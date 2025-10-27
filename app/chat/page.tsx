'use client';
import { useState } from 'react';

type Msg = { role: 'user' | 'assistant'; content: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'assistant', content: 'Bienvenue ! Discutons d’une question : la biologie peut-elle expliquer, à elle seule, la conscience ?' }
  ]);
  const [input, setInput] = useState('');

  async function send() {
    if (!input.trim()) return;
    const next = [...messages, { role: 'user', content: input }];
    setMessages(next);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: next.slice(-10) }), // keep last turns
    });
    if (!res.ok) {
      setMessages(m => [...m, { role: 'assistant', content: 'Erreur serveur. Vérifiez la clé API côté Netlify.' }]);
      return;
    }
    const data = await res.json();
    setMessages(m => [...m, { role: 'assistant', content: data.reply }]);
  }

  return (
    <section className="chat">
      <h1>Chat IA – Objectif 2033</h1>
      <div className="chatbox">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'bubble user' : 'bubble ai'}>
            <strong>{m.role === 'user' ? 'Vous' : 'IA'}</strong>
            <p>{m.content}</p>
          </div>
        ))}
      </div>
      <div className="composer">
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Écrivez votre message…" onKeyDown={(e)=>{ if(e.key==='Enter') send();}}/>
        <button className="btn" onClick={send}>Envoyer</button>
      </div>
      <p className="note">Configurez la variable d’environnement <code>OPENAI_API_KEY</code> avant déploiement.</p>
    </section>
  )
}
