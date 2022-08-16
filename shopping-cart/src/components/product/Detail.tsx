import { FC } from 'react'
import Container from '../dom/Container'
import Text from '../dom/Text'
import { type Product } from '../App'

type Props = {
  product: Product
}

const Detail: FC<Props> = ({ product }) => (
  <Container
    style={{
      width: '200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid',
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

export default Detail
