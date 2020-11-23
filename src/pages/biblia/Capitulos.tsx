import React, { useEffect, useState } from 'react';
import { IonBackButton, IonButton, IonContent,IonRouterOutlet, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListarCapitulos from '../../components/ListarCapitulos';
import ListarEdicao from '../../components/ListarEdicao';
import { useLocation } from "react-router-dom";
import { Livro } from '../../components/interface/Livro';
import { useHistory } from "react-router-dom";



const Capitulos = (props: any) => {



    const [livro, setLivro] = useState<Livro>({ abbrev: { pt: "", en: "" }, author: "", chapters: 0, group: "", name: "", testament: "" })

    const voltar = () => {
        props.history.goBack()
    }

    useEffect(() => {
        setLivro(props.location.state);

    }, [])

    return (
        <>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" onClick={voltar} >
                        <IonBackButton></IonBackButton>
                    </IonButton>
                    <IonTitle>Bíblia - {livro.name} </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen id="main-content">
              
            </IonContent>
        </IonPage>
            <ListarCapitulos livro={props.location.state} {...props}></ListarCapitulos>
            <ListarEdicao livro={props.location.state} {...props}></ListarEdicao>
        </>
    );
};

export default Capitulos;
