import { Header } from '@/components/header'
import { CartProvider } from '@/context/cart-context'
import { ReactNode, Suspense } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 px-8 py-8">
        <Suspense>
          <Header />
          {children}
        </Suspense>
      </div>
    </CartProvider>
  )
}
