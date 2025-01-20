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
import './Simulation1.css';
import { Link } from "react-router-dom";

function Simulation1() {
    const modal = useRef<HTMLIonModalElement>(null);
    const [user_login, setUser_login] = useState("");
    const [user_pass, setUser_pass] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    return (
        <>
            <IonPage>
                <IonContent className="custom-dash-content" scrollY>
                    <nav className="custom-simulation1-navbar">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3247 6.17496C17.8691 5.71935 17.1304 5.71935 16.6748 6.17496L9.67476 13.175C9.21915 13.6306 9.21915 14.3693 9.67476 14.8249L16.6748 21.8249C17.1304 22.2805 17.8691 22.2805 18.3247 21.8249C18.7803 21.3693 18.7803 20.6306 18.3247 20.175L12.1496 13.9999L18.3247 7.82488C18.7803 7.36926 18.7803 6.63057 18.3247 6.17496Z" fill="#D70404" />
                            </svg>
                        </button>
                        <h3>Saque Aniversário FGTS</h3>
                    </nav>

                    <img src="/Simulation1-card.png" className="custom-simulation1-img" />

                    <h3 className="custom-simulation1-comofunciona">Como funciona?</h3>

                    <div className="custom-simulation1-steps">
                        <ol className="styled-list">
                            <li>
                                <span className="step-number">1</span>
                                <div>
                                <strong>Ser maior de idade</strong>
                                <p>É necessário ter 18 anos ou mais para realizar a antecipação.</p>
                                </div>
                            </li>
                            <li>
                                <span className="step-number">2</span>
                                <div>

                                <strong>Informar uma conta corrente</strong>
                                <p>Você precisa fornecer os dados de uma conta corrente para receber o valor.</p>
                                </div>
                            </li>
                            <li>

                                <span className="step-number">3</span>
                                <div>
                                <strong>Autorizar consulta ao saldo FGTS</strong>
                                <p>Permita que o sistema consulte seu saldo disponível no FGTS.</p>
                                </div>
                            </li>
                            <li>
                                <span className="step-number">4</span>
                                <div>
                                    <strong>Fazer a simulação aqui no APP</strong>
                                    <p>Realize a simulação para saber os valores e condições da antecipação.</p>
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div className="custom-button-content">
                        <Link className="link" to="/simulation2">
                            <button
                                className="custom-button-modal1"
                            ><a>Simular</a></button>
                        </Link>
                    </div>

                </IonContent>
            </IonPage>
        </>
    );
}

export default Simulation1;
