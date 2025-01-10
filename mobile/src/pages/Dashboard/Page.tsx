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
} from "@ionic/react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './dashboard.css';
function Dashboard() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <>
      <div className="custom-dash-content">
        <div className="custom-dash-menu">
          <nav className="custom-dash-navbar">
            <div className="custom-div-navbar">
              <div>
                <img src="/profile.png" />
              </div>
              <div>
                <p>Bom dia!</p>
                <p>João</p>
              </div>
            </div>

            <div>
              <p>Lupa</p>
              <p>Sino</p>
            </div>
          </nav>
        </div>

        <p className="custom-dash-p-sejabemvindo">Seja bem-vindo ao App PH Negócios!</p>

        <div>
          <div className="custom-dash-card">
            <img src="" />
            <p>Antecipação FGTS</p>
          </div>
          <div className="custom-dash-card">
            <img src="" />
            <p>Antecipação FGTS</p>
          </div>
          <div className="custom-dash-card">
            <img src="" />
            <p>Antecipação FGTS</p>
          </div>
        </div>
      </div>
      <div className="custom-dash-products">
          <h1>Notificações</h1>
      </div>
    </>
  );
}

export default Dashboard;
