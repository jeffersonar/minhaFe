import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListarBiblia from '../../components/ListarBiblia';
import './Biblia.css';

const Biblia: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bíblia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bíblia</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListarBiblia ></ListarBiblia>
      </IonContent>
    </IonPage>
  );
};

export default Biblia;
