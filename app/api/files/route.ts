import { GetObjectCommand } from '@aws-sdk/client-s3'
import { NextResponse } from 'next/server'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { r2 } from '@/lib/r2'
import { NextRequest } from 'next/server'

export const GET = async (_ : NextRequest,{ params }: { params: { id: string } }) => {
    try {

        const image = await r2.send(
            new GetObjectCommand({
                Bucket: process.env.R2_BUCKET_NAME,
                Key: `${params.id}.png`,
            })
        )

        if (!image) {
            throw new Error('document not found.')
        }

        return new Response(image.Body?.transformToWebStream(), {
          // manage other type
            headers: {
                'Content-Type': 'image/png',
            },
        })
    } catch (error) {
        console.error(error)
    }
}


export const POST = async (request: Request) => {
    try {
        const signedUrl = await getSignedUrl(
            r2,
            new PutObjectCommand({
                Bucket: process.env.R2_BUCKET_NAME,
                Key: `filename.png`,
            }),
            { expiresIn: 60 }
        )


        return NextResponse.json({ url: signedUrl })
    } catch (error) {
        console.error(error)
    }
}
