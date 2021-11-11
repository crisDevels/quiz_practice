import { products_default } from "../data_default"
import { 
  Card,
  ResourceItem,
  ResourceList,
  TextStyle,
  Thumbnail
} from "@shopify/polaris"
import Link from 'next/link';

export const ListProducts = () => {
  return (
    <Card>
      <ResourceList
        resourceName={{singular: 'product', plural: 'products'}}
        items={products_default}
        renderItem={({ 
          id,
          link,
          name,
          description,
          image
        }) => {
          const media = <Thumbnail
            source={image}
            size="small"
            alt="Black choker necklace"
          />
          return (
            <ResourceItem
              id={id}
              accessibilityLabel={`View details for ${name}`}
              media={media}
              name={name}
              onClick={() => window.location.href = link}>
                
                <h3>
                  <TextStyle variation="strong">{name}</TextStyle>
                </h3>
                {description}
                  

            </ResourceItem>
          )
        }}
      >

      </ResourceList>
    </Card> 
  )
}