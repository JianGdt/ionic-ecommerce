import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonBadge,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
} from "@ionic/react";
import { cart, trash } from "ionicons/icons";
import Products from "../pages/Products";
import '../theme/main.css';

function SideMenuNav() {
  const [menuType, setMenuType] = useState("overlay");
  const [cartItems, setCartItems] = useState<any[]>([]);

  console.log('cartItems', cartItems);

  const addToCart = (product: any) => {
    setCartItems((prevCart) => (Array.isArray(prevCart) ? [...prevCart, product] : [product]));
  };

  const handleDeleteCart = async (productId: number) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete the cart item");
      }
      const result = await response.json();
      console.log("Cart item deleted:", result);

      setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  return (
    <>
      <IonMenu type={menuType} contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Carts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to close the menu</IonButton>
          </IonMenuToggle>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <IonCard key={index}>
                <IonGrid>
                  <IonRow class="ion-justify-content-end ion-text-start ion-align-items-center">
                    <IonCol>
                      <img src={item.image} alt={item.title} />
                    </IonCol>
                    <IonCol>
                      <p>{item.title}</p>
                    </IonCol>
                  </IonRow>
                  <IonGrid>
                    <IonRow class="ion-justify-content-end ion-text-center ion-align-items-center">
                      <IonCol>
                        <div>
                          <p>${item.price}</p>
                        </div>
                      </IonCol>
                      <IonCol>
                        <IonButton onClick={() => handleDeleteCart(item.id)}>
                          <IonIcon aria-hidden="true" icon={trash}></IonIcon>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonGrid>
              </IonCard>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonMenuToggle>
              <IonButton class=''>
                <IonIcon aria-hidden="true" icon={cart} />
                {cartItems.length > 0 && (
                  <IonBadge color="danger" slot="end">
                    {cartItems.length}
                  </IonBadge>
                )}
              </IonButton>
            </IonMenuToggle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Products addToCart={addToCart} />
        </IonContent>
      </IonPage>
    </>
  );
}

export default SideMenuNav;
