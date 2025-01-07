import React, { useEffect, useRef } from "react";
import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonInput
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
            <div>

          <h1 className="">Bem-vindo ao PH Negócios App</h1>
          <p className="">Antecipe seu FGTS hoje mesmo de forma rápida e simples com a PH Negócios.</p>
            </div>
          <div className="card">
                <img alt="Silhouette of mountains" src="/PHlogo.png" />
            </div>
            <IonInput label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>

            <IonInput label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>

          </div>
        </IonModal>
        </div>
    );
}

export default GetStarted;
