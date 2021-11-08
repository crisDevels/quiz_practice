import { gql, useQuery } from '@apollo/client';
import store from 'store-js';

const id = "gid://shopify/Product/6637961314442";
const GET_PRODUCTS = gql`
  {
    product(id: ${id}) {
      title
      description
      onlineStoreUrl
    }
  }
`;

export const ListProducts = () => {
  
  const { data, loading, error } = useQuery(GET_PRODUCTS)
  
  console.log(store.get('ids'));

  if (loading) return <p>Loading ...</p>;
  return console.log(data);

}