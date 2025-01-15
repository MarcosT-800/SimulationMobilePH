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
    IonLabel,
    IonList,
    IonThumbnail
} from "@ionic/react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ModalButton from "../../components/Buttons/Button";
import { Link } from "react-router-dom";
import './Cadastro2.css';
import '../Simulation/Simulation3.css';
import { IonIcon } from '@ionic/react';
import { eye, lockClosed } from 'ionicons/icons';
function Cadastro2() {
    const modal = useRef<HTMLIonModalElement>(null);
    const [user_login, setUser_login] = useState("");
    const [user_pass, setUser_pass] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const [isParcelasVisible, setIsParcelasVisible] = useState(false);

    const toggleParcelas = () => {
        setIsParcelasVisible(!isParcelasVisible);
    };

    return (
        <>
            <IonPage>
                <IonContent className="custom-dash-content" scrollY>

                    <nav className="custom-simulation3-navbar">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3248 6.17496C17.8692 5.71935 17.1305 5.71935 16.6749 6.17496L9.67488 13.175C9.21927 13.6306 9.21927 14.3693 9.67488 14.8249L16.6749 21.8249C17.1305 22.2805 17.8692 22.2805 18.3248 21.8249C18.7804 21.3693 18.7804 20.6306 18.3248 20.175L12.1498 13.9999L18.3248 7.82488C18.7804 7.36926 18.7804 6.63057 18.3248 6.17496Z" fill="#D70404" />
                            </svg>
                        </button>
                    </nav>


                    <div className="custom-cadastro2-content">

                        <div className="custom-cadastro2-content-header">
                            <h3>Dados Pessoais</h3>
                            <p>Preencha os dados corretamente para enviar a proposta ao banco e tudo prosseguir corretamente abaixo preencha os seus dados:</p>
                        </div>

                        <hr />

                        <div className="custom-cadastro2-form">
                            <div className="custom-cadastro2-form-header">
                                <h3>Dados pessoais</h3>
                                <p>Preencha corretamente</p>
                            </div>

                            <div className="custom-cadastro2-form-field">
                                <div>
                                    <label>Nome completo</label>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="nome completo"></IonInput>
                                    </IonItem>                               
                                 </div>

                                <div>
                                <label>Nome da mãe</label>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="nome completo da mãe"></IonInput>
                                    </IonItem>    
                                </div>

                                <div>
                                     <label>Data de nascimento</label>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="12/05/1992"></IonInput>
                                    </IonItem>    
                                </div>
<div className="custom-input-gen">

                                <div>
                                    <label>Gênero</label>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="FEM"></IonInput>
                                    </IonItem>
                                </div>

                                <div>
                                    <label>Estado Cívil</label>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="Solteiro(a)"></IonInput>
                                    </IonItem>
                                </div>
</div>

                                <div>
                                    <label>Cidade</label>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="São Paulo"></IonInput>
                                    </IonItem>
                                </div>

                                <div className="custom-cadastro2-form-header">
                                <h3>Contatos</h3>
                                <p>Preencha suas informaões de contato corretamente</p>
                            </div>
                                <div>
                                  <label>Nome completo</label>
                                  <IonList>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="email@domain.com">
                                        <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
                                        <IonButton fill="clear" slot="end" aria-label="Show/hide">
                                            <IonIcon slot="icon-only" name={eye} aria-hidden="true"></IonIcon>
                                        </IonButton>
                                        </IonInput>
                                    </IonItem>
                                    </IonList>
                                </div>

                                <div>
                                     <label>Nome completo</label>
                                     <IonList>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="email@domain.com">
                                        <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
                                        <IonButton fill="clear" slot="end" aria-label="Show/hide">
                                            <IonIcon slot="icon-only" name={eye} aria-hidden="true"></IonIcon>
                                        </IonButton>
                                        </IonInput>
                                    </IonItem>
                                    </IonList>
                                </div>

                                <div>
                                <label>Valor da sua renda mensal</label>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="R$ 2.000.00"></IonInput>
                                    </IonItem>
                                </div>
                            </div>
                        </div>
                    <Link to="/cadastro3">
                        <button
                            className="custom-button-modal"
                        >Continuar</button>
                    </Link>
                    </div>

                </IonContent>
            </IonPage>
        </>
    );
}

export default Cadastro2;
