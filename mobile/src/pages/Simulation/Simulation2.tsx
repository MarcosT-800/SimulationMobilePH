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
import './Simulation2.css';
import { Link } from "react-router-dom";
function Simulation2() {
    const modal = useRef<HTMLIonModalElement>(null);
    const [user_login, setUser_login] = useState("");
    const [user_pass, setUser_pass] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    return (
        <>
            <IonPage>
                <IonContent className="custom-dash-content" scrollY>

<div className="custom-content-simulatio2">
    <div>
                    <nav className="custom-simulation2-navbar">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3247 6.17496C17.8691 5.71935 17.1304 5.71935 16.6748 6.17496L9.67476 13.175C9.21915 13.6306 9.21915 14.3693 9.67476 14.8249L16.6748 21.8249C17.1304 22.2805 17.8691 22.2805 18.3247 21.8249C18.7803 21.3693 18.7803 20.6306 18.3247 20.175L12.1496 13.9999L18.3247 7.82488C18.7803 7.36926 18.7803 6.63057 18.3247 6.17496Z" fill="#D70404" />
                            </svg>
                        </button>
                    </nav>

    
                    <h3 className="custom-simulation2-simular">Simular contratação</h3>
                    <p className="custom-simulation2-p">Para simular a oferta de saque-aniversário do FGTS siga o passo a passo abaixo:</p>
                    <div className="check-simulation2-content">
                    <div className="custom-simulation2-checkcontent">
                        <div>
                            <h3>Habilite o saque-aniversário no
                                app FGTS</h3>
                            <p>Ao finalizar marque a caixinha ao lado.</p>
                            <div className="custom-simulation-comohabilitar">
                                <a>Como habilitar?<span>
                                </span></a>
                            </div>
                        </div>
                        <input type="checkbox"></input>
                    </div>

                    

                    
                    <div className="custom-simulation2-checkcontent">
                        <div>
                            <h3>Habilite o saque-aniversário no
                                app FGTS</h3>
                            <p>Ao finalizar marque a caixinha ao lado.</p>
                            <div className="custom-simulation-comohabilitar">
                                <a>Como habilitar?<span>
                                </span></a>
                            </div>
                        </div>
                        <input type="checkbox"></input>
                    
                    </div>
                    </div>
    </div>
    <div className="custom-button-content">
                        <Link to="/simulation3">
                            <button
                                className="custom-button-modal1"
                            >Simular</button>
                        </Link>
    </div>
</div>

                </IonContent>
            </IonPage>
        </>
    );
}

export default Simulation2;
