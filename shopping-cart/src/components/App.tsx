import axios, { type AxiosResponse } from 'axios'
import { useEffect, useReducer } from 'react'
import Listing from './product/Listing'

const PRODUCTS_API_URL = 'https://fakestoreapi.com/products'
export type Product = {
  id: number
  title: string
  price: number
  image: string
  description: string
}

const initialState = {
  cart: [],
  products: [],
}

const reducer = (
  state: typeof initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTS': {
      return { ...state, products: action.payload.products }
    }

    default:
      return state
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    products: [],
  })

  useEffect(() => {
    /**
     * Fetches products form API
     */
    const fetchProducts = async () => {
      try {
        const cleanApiResponse = (data: any) => {
          const newData: Product[] = data?.map((item: any) => ({
            id: item.id,
            title: item.title,
            image: item.image,
            description: item.description,
            price: item.price,
          }))

          return newData
        }

        const response: AxiosResponse<Product[], any> = await axios.get(
          `${PRODUCTS_API_URL}`
        )

        if (response.status !== 200) {
          console.error(
            `Error in product api response, Status: ${response.status}, Message: ${response.statusText}`
          )

          return
        }

        const { data } = response

        console.log(data)
        const products = cleanApiResponse(data)
        console.log(products)

        dispatch({ type: 'UPDATE_PRODUCTS', payload: { products: data } })
      } catch (err: any) {
        const error = err as Error

        console.error(
          `Error occurred while fetching products, ${error.message}`
        )
      }
    }

    fetchProducts()
  }, [])

  // console.log(state)
  const { products, cart } = state

  return <Listing products={products} />
}

export default App
