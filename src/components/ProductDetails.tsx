import React from "react";
import {
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
} from "@ionic/react";

const ProductDetails = ({ isOpen, onClose, prodDetails }:ComponentPropTypes.productDetailsPropsType) => {
  if (!prodDetails) return null; 

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Details</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src={prodDetails.image} alt={prodDetails.title} />
        <h2>{prodDetails.title}</h2>
        <p>{prodDetails.description}</p>
        <h3>Price: ${prodDetails.price}</h3>
      </IonContent>
    </IonModal>
  );
};

export default ProductDetails;
