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
                    <nav className="custom-simulation2-navbar">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3247 6.17496C17.8691 5.71935 17.1304 5.71935 16.6748 6.17496L9.67476 13.175C9.21915 13.6306 9.21915 14.3693 9.67476 14.8249L16.6748 21.8249C17.1304 22.2805 17.8691 22.2805 18.3247 21.8249C18.7803 21.3693 18.7803 20.6306 18.3247 20.175L12.1496 13.9999L18.3247 7.82488C18.7803 7.36926 18.7803 6.63057 18.3247 6.17496Z" fill="#D70404" />
                            </svg>
                        </button>
                    </nav>


                    <h3 className="custom-simulation2-simular">Simular contratação</h3>

                    <p className="custom-simulation2-p">Para simular a oferta de saque-aniversário do FGTS siga o passo a passo abaixo:</p>

                    <div className="custom-simulation2-checkcontent">
                        <div>

                            <h3>Habilite o saque-aniversário no
                                app FGTS</h3>
                            <p>Ao finalizar marque a caixinha ao lado.</p>

                            <div className="custom-simulation-comohabilitar">

                                <a>Como habilitar?<span>{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66663 8.49998C2.66663 8.13179 2.9651 7.83331 3.33329 7.83331L12.6666 7.83331C13.0348 7.83331 13.3333 8.13179 13.3333 8.49998C13.3333 8.86817 13.0348 9.16665 12.6666 9.16665L3.33329 9.16665C2.9651 9.16665 2.66663 8.86817 2.66663 8.49998Z" fill="#D70404"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.52864 3.36195C7.78899 3.1016 8.2111 3.1016 8.47145 3.36195L13.1381 8.02862C13.3985 8.28896 13.3985 8.71108 13.1381 8.97142L8.47145 13.6381C8.2111 13.8984 7.78899 13.8984 7.52864 13.6381C7.26829 13.3777 7.26829 12.9556 7.52864 12.6953L11.7239 8.50002L7.52864 4.30476C7.26829 4.04441 7.26829 3.6223 7.52864 3.36195Z" fill="#D70404"/>
</svg> */}
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
                                <a>Como habilitar?<span>{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66663 8.49998C2.66663 8.13179 2.9651 7.83331 3.33329 7.83331L12.6666 7.83331C13.0348 7.83331 13.3333 8.13179 13.3333 8.49998C13.3333 8.86817 13.0348 9.16665 12.6666 9.16665L3.33329 9.16665C2.9651 9.16665 2.66663 8.86817 2.66663 8.49998Z" fill="#D70404"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.52864 3.36195C7.78899 3.1016 8.2111 3.1016 8.47145 3.36195L13.1381 8.02862C13.3985 8.28896 13.3985 8.71108 13.1381 8.97142L8.47145 13.6381C8.2111 13.8984 7.78899 13.8984 7.52864 13.6381C7.26829 13.3777 7.26829 12.9556 7.52864 12.6953L11.7239 8.50002L7.52864 4.30476C7.26829 4.04441 7.26829 3.6223 7.52864 3.36195Z" fill="#D70404"/>
</svg> */}
                                </span></a>
                            </div>
                        </div>
                        <input type="checkbox"></input>
                    </div>

                    <div className="custom-button-content">
                        <Link to="/simulation3">
                            <button
                                className="custom-button-modal"
                            >Simular</button>
                        </Link>
                    </div>

                </IonContent>
            </IonPage>
        </>
    );
}

export default Simulation2;
