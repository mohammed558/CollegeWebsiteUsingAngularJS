import { Request, Response } from 'express';
import OpenAI from 'openai';
import { prisma } from '../config/prisma';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const chat = async (req: Request, res: Response) => {
    const { message } = req.body;
    console.time('OpenAI Response');
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are the Modern College AI Assistant. Provide helpful info about courses, admissions, and faculty." },
                { role: "user", content: message }
            ]
        });
        const reply = completion.choices[0].message.content;
        console.timeEnd('OpenAI Response');

        // Async logging (don't await to speed up user response)
        prisma.chatLog.create({ data: { role: 'user', content: message } }).catch(e => console.error('Prisma log error:', e));
        prisma.chatLog.create({ data: { role: 'assistant', content: reply || '' } }).catch(e => console.error('Prisma log error:', e));

        res.json({ reply });
    } catch (error: any) {
        console.error('Chatbot error:', error.message || error);
        res.status(500).json({ error: 'Chatbot failed', details: error.message });
    }
};