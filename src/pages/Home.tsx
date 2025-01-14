import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import useFetch from '../hooks/useFetch';

const Home: React.FC = () => {
  const data = useFetch('https://fakestoreapi.com/products')
  console.log('data', data);




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
      <ExploreContainer name="Ionic React" />
    </IonPage>
  );
};

export default Home;
