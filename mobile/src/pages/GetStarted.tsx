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
import ModalButton from "../components/Buttons/Button";
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
      {/* Botão reutilizável */}
      <ModalButton
        text="Iniciar"
        className="custom-button"
        onClick={() => console.log("Botão clicado!")}
      />

      <IonModal ref={modal} trigger="open-modal" initialBreakpoint={1} breakpoints={[0, 1]}>
        <div className="block">
          <div>

            <h1 className="title_modal">Bem-vindo a PH!</h1>
            <p className="">Vamos continuar com o login!</p>
          </div>
          {/* Imagem no topo */}
          <img alt="Silhouette of mountains" src="/PHlogo.png" />

          {/* Mensagem de login */}

          {/* Inputs de login */}
         {/* Inputs de login */}
<div className="login-inputs">
    <IonLabel className="custom-label">E-mail ou CPF</IonLabel>
  <IonItem className="custom-input">
    <IonInput type="email" placeholder="Digite seu e-mail" />
  </IonItem>

    <IonLabel className="custom-label">Senha</IonLabel>
  <IonItem className="custom-input">
    <IonInput type="password" placeholder="Digite sua senha" />
  </IonItem>
</div>

          {/* Botão para outra página */}
          <ModalButton
            text="Iniciar"
            className="custom-button"
            onClick={() => console.log("Botão clicado!")}
          />
        </div>
      </IonModal>
    </div>
  );
}

export default GetStarted;
