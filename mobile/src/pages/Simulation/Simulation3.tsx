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
import './Simulation3.css';
import { Link } from "react-router-dom";
function Simulation3() {
    const modal = useRef<HTMLIonModalElement>(null);
    const [user_login, setUser_login] = useState("");
    const [user_pass, setUser_pass] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    return (
        <>
            <IonPage>
                <IonContent className="custom-dash-content" scrollY>
                    <nav className="custom-simulation3-navbar">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3247 6.17496C17.8691 5.71935 17.1304 5.71935 16.6748 6.17496L9.67476 13.175C9.21915 13.6306 9.21915 14.3693 9.67476 14.8249L16.6748 21.8249C17.1304 22.2805 17.8691 22.2805 18.3247 21.8249C18.7803 21.3693 18.7803 20.6306 18.3247 20.175L12.1496 13.9999L18.3247 7.82488C18.7803 7.36926 18.7803 6.63057 18.3247 6.17496Z" fill="#D70404" />
                            </svg>
                        </button>
                    </nav>


                    <h3 className="custom-simulation3-simular">Confira seus dados pessoais</h3>

                <div className="custom-content-div">
                     <div className="custom-content-input">
                                  <label className="custom-label">CPF</label>
                                  <button className="custom-input">
                                 
                                    <IonInput 
                                    type="email" 
                                    placeholder="000.000.000.00"
                                    value={user_login}
                                    onIonChange={(e) => setUser_login(e.detail.value!)}
                                    className="custom-input-input"
                                    />
                                  </button>
                    </div>
                    
                     <div>
                                  <label className="custom-label">Data de Nascimento</label>
                                  <button className="custom-input">
                                    
                                    <IonInput 
                                    type="email"
                                    value={user_pass}
                                    placeholder="10/02/2024" 
                                    onIonChange={(e) => setUser_pass(e.detail.value!)}
                                    className="custom-input-input"
                                  />
                                  </button>
                     </div>
                     </div>

    <div className="warner-content">

                     <div className="warner">
                     <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12.0098 17C11.4575 17 11.0098 16.5523 11.0098 16V12C11.0098 11.4477 11.4575 11 12.0098 11C12.5621 11 13.0098 11.4477 13.0098 12V16C13.0098 16.5523 12.5621 17 12.0098 17ZM12 7C11.4477 7 11 7.44771 11 8C11 8.55228 11.4477 9 12 9H12.001C12.5533 9 13.001 8.55229 13.001 8C13.001 7.44772 12.5533 7 12.001 7H12Z" fill="#145F91"/>
</svg>
                        <h3>Antes de continuar, precisamos que você leia e concorde com a politica de privacidade.</h3>
                     </div>
</div>
<div className="custom-content-check">

                     <div className="check">
            <input type="checkbox"/>
            <p className="p_credenciais">Li e estou de acordo com o aviso de <span>privacidade</span> e a <span>politica de serviços</span> da <span>PH negócios</span></p>
            </div>


            <div className="check">
            <input type="checkbox"/>
            <p className="p_credenciais">Você concorda que a PH negócios compartilhes seus dados com o banco futuro para a simulação do saque aniversário?</p>
            </div>
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

export default Simulation3;
