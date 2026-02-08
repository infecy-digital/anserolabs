import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.RETELL_API_KEY;
    const agentId = process.env.RETELL_AGENT_ID || 'agent_ac1b29fd30e9b8a580acee2041'; // Fallback to provided ID

    if (!apiKey) {
        return res.status(500).json({ error: 'Missing RETELL_API_KEY' });
    }

    try {
        const response = await fetch('https://api.retellai.com/v2/create-web-call', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                agent_id: agentId,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create web call');
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error: any) {
        console.error('Error creating web call:', error);
        return res.status(500).json({ error: error.message });
    }
}
