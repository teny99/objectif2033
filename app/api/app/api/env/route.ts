export async function GET() {
  const hasKey = !!process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.startsWith('sk-');
  return new Response(
    JSON.stringify({
      hasKey,
      envLength: process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.length : 0,
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
