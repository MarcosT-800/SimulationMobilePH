import React, { useEffect, useRef } from "react";
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
} from "@ionic/react";

import "./main.css";

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

  useEffect(() => {
    // Adiciona a classe ao body quando o componente é montado
    document.body.classList.add("backdrop-no-scroll");

    // Abre o modal automaticamente
    if (modal.current) {
      modal.current.present();
    }

    // Remove a classe ao desmontar o componente
    return () => {
      document.body.classList.remove("backdrop-no-scroll");
    };
  }, []); // O array vazio garante que isso aconteça apenas uma vez ao montar

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open Sheet Modal
        </IonButton>
        <IonModal
          ref={modal}
          trigger="open-modal"
          initialBreakpoint={1}
          breakpoints={[0, 1]}
        >
          <div className="block">Block of Content</div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
