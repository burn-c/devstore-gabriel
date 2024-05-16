import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    // next: { revalidate: 60 * 60 },
    cache: 'no-cache',
  })
  const product = await response.json()

  return product
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  const productImageUrl = new URL(product.image, process.env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img alt="" src={productImageUrl} style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
