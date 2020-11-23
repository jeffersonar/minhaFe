import React, { useEffect, useState } from 'react';
import { IonMenu, IonList, IonItem, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import data from './data/livros.json';
import { Livro } from './interface/Livro';

const ListarCapitulos = (props: any) => {

    const [livro, setLivro] = useState<Livro>({ abbrev: { pt: "", en: "" }, author: "", chapters: 0, group: "", name: "", testament: "" })
    useEffect(() => {
        setLivro(props.livro);
        console.log(livro)
    }, [])

    const abriCapitulo = (cap: any) => {
        console.log(cap);
    }

    const ListarVersiculos = () => {
        let x = 1;
        let text = []
        while (x <= livro.chapters) {
            let t = x;
            text.push(<IonItem onClick={e => { abriCapitulo(t) }} key={t} >Capitulo {x}</IonItem>)
            x++
        }
        return (<>
            {
                text.map(value => {
                    return value
                })
            }
        </>)
    }
    return (
        <IonMenu side="start" content-id="main-content">
            <IonHeader>
                <IonToolbar color="primary" className="translucent">
                    <IonTitle>Captitulos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <ListarVersiculos/>
                </IonList>
            </IonContent>
        </IonMenu>

    )
}
export default ListarCapitulos;