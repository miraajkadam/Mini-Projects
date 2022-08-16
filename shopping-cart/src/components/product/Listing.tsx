import { FC } from 'react'
import { type Product } from '../App'
import Detail from './Detail'

type Props = {
  products: Product[]
}

const Listing: FC<Props> = ({ products }) => (
  <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
    {products.map((product: Product, index: number) => (
      <Detail key={index} product={product} />
    ))}
  </div>
)

export default Listing
