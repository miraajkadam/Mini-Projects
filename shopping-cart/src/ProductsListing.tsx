import { FC } from 'react'
import { type Product } from './App'
import ProductDetail from './ProductDetail'

type Props = {
  products: Product[]
}

const ProductsListing: FC<Props> = ({ products }) => (
  <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
    {products.map((product: Product, index: number) => (
      <ProductDetail key={index} product={product} />
    ))}
  </div>
)

export default ProductsListing
