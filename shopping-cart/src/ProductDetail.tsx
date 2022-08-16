import { FC } from 'react'
import { type Product } from './App'
import Container from './elements/Container'
import Text from './elements/Text'

type Props = {
  product: Product
}

const ProductDetail: FC<Props> = ({ product }) => (
  <Container
    style={{
      width: '200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid'
    }}
  >
    <img
      src={product.image}
      alt={product.title}
      style={{ height: 200, width: 150 }}
    />
    <Text>
      <strong>{product.title}</strong>
    </Text>
    <p>${product.price}</p>
    <button style={{ alignSelf: 'flex-end' }}>Add to cart</button>
  </Container>
)

export default ProductDetail
