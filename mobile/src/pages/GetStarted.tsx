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
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import "./main.css";

function GetStarted() {

    return (
        <div className="block">
            <div className="card">
                <img alt="Silhouette of mountains" src="/GetStartedLogo.png" />
            </div>

            <h1 className="title">Bem-vindo ao PH Negócios App</h1>
            <p className="subtitle">Antecipe seu FGTS hoje mesmo de forma rápida e simples com a PH Negócios.</p>

            <button className="button">
                Iniciar
            </button>
            
        </div>
    );
}

export default GetStarted;
