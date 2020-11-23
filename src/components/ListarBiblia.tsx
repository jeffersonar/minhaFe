import React from 'react';
import { IonContent, IonItemDivider, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import data from './data/livros.json';
import { useHistory } from "react-router-dom";
import {Livro} from './interface/Livro'

const ListarBiblia: React.FC = (props:any) => {
   
    const  history  = useHistory();
    
    const abriCap =(livro: Livro)=>{
        history.push({
            pathname:"/capitulos",
            state:livro
        })
      
    }
    const Livro = () => {
        return (
            <IonContent>
                {
                    data.map((livro) => {
                        if (livro.name == "Gênesis") {
                            return (<>
                                <IonItemDivider>
                                    <IonLabel>
                                        Velho Testamento
                                </IonLabel>
                                </IonItemDivider>
                                <IonItem onClick={e=>abriCap(livro)}>
                                    <IonLabel>{livro.name}</IonLabel>
                                </IonItem>
                            </>
                            )
                        } else if (livro.name == "Mateus") {
                            return (
                                <>
                                    <IonItemDivider>
                                        <IonLabel>
                                            Novo Testamento
                                        </IonLabel>
                                    </IonItemDivider>
                                    <IonItem onClick={e=>abriCap(livro)}>
                                        <IonLabel>{livro.name}</IonLabel>
                                    </IonItem>
                                </>
                            )
                        } else {
                            return (
                                <IonItem onClick={e=>abriCap(livro)}>
                                    <IonLabel  >{livro.name}</IonLabel>
                                </IonItem>
                            )
                        }
                    })
                }
            </IonContent>
        )
    }

    return (
        <Livro />
    );
};

export default ListarBiblia;
