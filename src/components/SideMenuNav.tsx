import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonBadge,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { cart } from "ionicons/icons";
import Products from "../pages/Products";

function SideMenuNav() {
  const [menuType, setMenuType] = useState("overlay");
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems((prevCart) => [...prevCart, product]);
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
              <IonItem key={index}>
                <div>
                  <img src={item.image} alt={item.title} width={50} />
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </IonItem>
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
              <IonButton>
                <IonIcon aria-hidden="true" icon={cart} />
                {cartItems.length > 0 && (
                  <IonBadge color="danger" slot="end">
                    {cartItems.length}
                  </IonBadge>
                )}
                View Cart
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
