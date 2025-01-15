import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import useFetch from "../hooks/useFetch";
import ProductDetails from "../components/ProductDetails";
interface ProductsProps {
  addToCart: (product: any) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<
    ComponentPropTypes.productDetailsPropsType["prodDetails"] | null
  >(null);
  const data = useFetch("https://fakestoreapi.com/products");

  const handleAddToCart = async (productId: number) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const product = await response.json();
    addToCart(product);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data.length > 0 &&
          data.map((product) => (
            <IonCard key={product.id}>
              <img src={product.image} alt={product.title} />
              <IonCardHeader>
                <IonCardTitle>{product.title}</IonCardTitle>
                <IonCardSubtitle>{product.category}</IonCardSubtitle>
              </IonCardHeader>
              <IonButton
                fill="clear"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </IonButton>
              <IonButton
                fill="clear"
                onClick={() => handleViewDetails(product)}
              >
                View More Details
              </IonButton>
            </IonCard>
          ))}

        <ProductDetails
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          prodDetails={selectedProduct}
        />
      </IonContent>
    </IonPage>
  );
};

export default Products;
