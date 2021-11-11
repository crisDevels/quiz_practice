import { Heading, Page, TextContainer } from "@shopify/polaris";
import { ListProducts } from "../components/listProducts";

const Index = () => {

  return (
    <Page
      primaryAction={{content: 'Save', disabled: true}}>

      <TextContainer spacing="tight">
        <Heading>Products</Heading>
        <p>
          Select a products to edit your metafields
        </p>
      </TextContainer>
      <ListProducts/>

    </Page>
  )
}

export default Index;
