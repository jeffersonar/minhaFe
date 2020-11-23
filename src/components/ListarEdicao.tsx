import React,{ useEffect, useState } from 'react';
import {  IonMenu, IonList, IonItem, IonHeader, IonToolbar, IonTitle ,IonContent} from '@ionic/react';
import data from './data/livros.json';
import {Livro} from './interface/Livro';

const ListarEdicao = (props:any) => {
    useEffect(() => {
      // console.log(props)
    }, [])
    

    return(
     <IonMenu side="end" type="push" content-id="main-content">
        <IonHeader>
            <IonToolbar color="primary">
            <IonTitle>Edição</IonTitle>
            </IonToolbar>
        </IonHeader> 
        <IonContent>
            <IonList>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
            </IonList>
        </IonContent>
     </IonMenu>
  
    )
}   
export default ListarEdicao;