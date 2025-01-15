import React, { useEffect, useRef, useState } from "react";
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
    IonToast,
} from "@ionic/react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ModalButton from "../../components/Buttons/Button";
import './Proposta1.css';
import { Link } from "react-router-dom";
function Proposta1() {
    const modal = useRef<HTMLIonModalElement>(null);
    const [user_login, setUser_login] = useState("");
    const [user_pass, setUser_pass] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    return (
        <>
            <IonPage>
                <IonContent scrollY>
                    <div className="custom-proposta1-content">

                    <nav className="custom-proposta1-navbar">
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                             <path d="M12.9422 15.8078C13.0003 15.8659 13.0463 15.9348 13.0777 16.0107C13.1092 16.0866 13.1254 16.1679 13.1254 16.25C13.1254 16.3321 13.1092 16.4135 13.0777 16.4893C13.0463 16.5652 13.0003 16.6341 12.9422 16.6922C12.8841 16.7503 12.8152 16.7963 12.7393 16.8278C12.6634 16.8592 12.5821 16.8754 12.5 16.8754C12.4179 16.8754 12.3366 16.8592 12.2607 16.8278C12.1848 16.7963 12.1159 16.7503 12.0578 16.6922L5.80782 10.4422C5.74971 10.3842 5.70361 10.3152 5.67215 10.2393C5.6407 10.1635 5.62451 10.0821 5.62451 10C5.62451 9.91788 5.6407 9.83655 5.67215 9.76067C5.70361 9.6848 5.74971 9.61587 5.80782 9.55782L12.0578 3.30782C12.1751 3.19055 12.3342 3.12466 12.5 3.12466C12.6659 3.12466 12.8249 3.19055 12.9422 3.30782C13.0595 3.4251 13.1254 3.58416 13.1254 3.75001C13.1254 3.91586 13.0595 4.07492 12.9422 4.1922L7.1336 10L12.9422 15.8078Z" fill="#878787"/>
                        </svg>
                        </button>

                        <h3>Detalhes</h3>
                    </nav>

                    <div className="custom-proposta1-navbar">
                        <h4>Nintendo Pro</h4>
                        <h5>Edit</h5>
                    </div>

                    <div className="custom-proposta1-card">
                        <img src="/Proposta1Card.png" className="cardimg" />

                        <div className="custom-proposta1-status">
                            <div>
                                <h3>Nintendo Pro</h3>
                                <p>1200 Sales</p>
                            </div>

                            <h3>Pendente</h3>
                        </div>
                    </div>

                    <div className="custom-proposta1-grid">
                        <button><img src="/Proposta1Card2.png"/></button>
                        <button><img src="/Proposta1Card2.png"/></button>
                        <button><img src="/Proposta1Card2.png"/></button>
                    </div>

                    <div className="custom-proposta1-navbar">
                        <h3>Mais </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="14" viewBox="0 0 3 14" fill="none">
<circle cx="1.5" cy="2" r="1.5" fill="#F1F1F1"/>
<circle cx="1.5" cy="7" r="1.5" fill="#F1F1F1"/>
<circle cx="1.5" cy="12" r="1.5" fill="#F1F1F1"/>
</svg>
                    </div>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
}

export default Proposta1;
