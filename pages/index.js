import { ResourcePicker } from "@shopify/app-bridge-react";
import { Page, Layout, Card, EmptyState } from "@shopify/polaris";
import { useState } from "react";
import store from 'store-js';
import { ListProducts } from "../components/resourcesList";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';


const Index = () => {
  const [open, setOpen] = useState(false);
  const [empty, setEmpty] = useState(null);
  
  const handleSelection = (resources) => {
    setOpen(false);
    const idsFromResources = resources.selection.map((product) => product.id);
    store.set('ids', idsFromResources);
    setEmpty(idsFromResources);
  };

  return (
    
    <Page>
      
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setOpen(false)}
      />

      {!empty 
        ? <Layout>
            <EmptyState
              heading="Discount your products temporarily"
              action={{
                content: 'Select products',
                onAction: () => setOpen(true),
              }}
              image={img}
            >
            <p>
              Select products to change their price temporarily.
            </p>
            </EmptyState>
          </Layout>
        : <ListProducts />
      }
      
    </Page>
    
  )

}

export default Index;
