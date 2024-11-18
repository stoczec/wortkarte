import { URL_IMAGES } from '@/constans/constans'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function fetchImage(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch((URL_IMAGES + req.query.fileKey) as string)
        const data = await response.blob()
        res.setHeader('Content-Type', 'image/jpeg')
        res.send(data)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the image' })
    }
}
