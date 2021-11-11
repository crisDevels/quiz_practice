import { useRouter } from 'next/router'
import { products_default } from '../../data_default'

const Product = () => {
  const router = useRouter()
  const { id } = router.query
  const { name, description, image } = products_default.filter(product => product.id === Number(id))[0]

  return (
    <p>Product: {name}</p>
  )
}

export default Product