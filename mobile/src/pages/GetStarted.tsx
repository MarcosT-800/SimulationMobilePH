import React, { useEffect, useRef } from "react";
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import "./main.css";

function GetStarted() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <div className="body">
      <div className="card">
        <img alt="Silhouette of mountains" src="/GetStartedLogo.png" />
      </div>
      <h1 className="title">Bem-vindo ao PH Negócios App</h1>
      <p className="subtitle">Antecipe seu FGTS hoje mesmo de forma rápida e simples com a PH Negócios.</p>
      <IonButton id="open-modal" expand="block" color="danger">
        Open Sheet Modal
      </IonButton>

      <IonModal ref={modal} trigger="open-modal" initialBreakpoint={1} breakpoints={[0, 1]}>
        <div className="block">
              {/* Imagem no topo */}
             <IonCard className="">
                <img alt="Silhouette of mountains" src="/PHlogo.png" />
              </IonCard>

              {/* Mensagem de login */}
              <h1 className="">Bem-vindo ao PH Negócios App</h1>
              <p className="">Por favor, faça login para continuar</p>

              {/* Inputs de login */}
              <IonItem>
                <IonLabel position="floating">E-mail</IonLabel>
                <IonInput type="email" placeholder="Digite seu e-mail" />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Senha</IonLabel>
                <IonInput type="password" placeholder="Digite sua senha" />
              </IonItem>

              {/* Botão para outra página */}
              <IonButton
                expand="block"
                className="bg-red-500 text-white hover:bg-red-700 mt-4"
                onClick={() => console.log("Navegando para outra página...")}
              >
                Entrar
              </IonButton>
            </div>
          </IonModal>
        </div>
  );
}

export default GetStarted;
