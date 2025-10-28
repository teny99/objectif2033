import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const hasKey = !!process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.startsWith('sk-');
  res.status(200).json({
    hasKey,
    envLength: process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.length : 0,
  });
}
