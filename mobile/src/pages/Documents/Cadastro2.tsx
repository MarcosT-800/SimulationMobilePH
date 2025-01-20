import React, { useRef, useState } from "react";
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
    IonThumbnail,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import InputMask from "react-input-mask"; // Biblioteca para máscara
import { Link } from "react-router-dom";
import './Cadastro2.css';
import '../Simulation/Simulation3.css';

function Cadastro2() {
    const modal = useRef<HTMLIonModalElement>(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    return (
        <>
            <IonPage>
                <IonContent className="custom-dash-content" scrollY>
                    <nav className="custom-simulation3-navbar">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.3248 6.17496C17.8692 5.71935 17.1305 5.71935 16.6749 6.17496L9.67488 13.175C9.21927 13.6306 9.21927 14.3693 9.67488 14.8249L16.6749 21.8249C17.1305 22.2805 17.8692 22.2805 18.3248 21.8249C18.7804 21.3693 18.7804 20.6306 18.3248 20.175L12.1498 13.9999L18.3248 7.82488C18.7804 7.36926 18.7804 6.63057 18.3248 6.17496Z" fill="#D70404" />
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
                                        <IonInput labelPlacement="stacked" placeholder="Nome completo"></IonInput>
                                    </IonItem>
                                </div>

                                <div>
                                    <label>CPF</label>
                                    <IonItem>
                                        <InputMask
                                            mask="999.999.999-99"
                                            placeholder="000.000.000-00"
                                            className="ion-input-mask"
                                        />
                                    </IonItem>
                                </div>

                                <div>
                                    <label>Data de nascimento</label>
                                    <IonItem>
                                        <InputMask
                                            mask="99/99/9999"
                                            placeholder="DD/MM/AAAA"
                                            className="ion-input-mask"
                                        />
                                    </IonItem>
                                </div>

                                <div className="custom-input-gen">
                                    <div style={{ width: '100%'}}>
                                        <label>Gênero</label>
                                        <IonList>
                                            <IonItem>
                                                <IonSelect labelPlacement="stacked" value="Masculino">
                                                    <IonSelectOption value="Masculino">Masculino</IonSelectOption>
                                                    <IonSelectOption value="Feminino">Feminino</IonSelectOption>
                                                </IonSelect>
                                            </IonItem>
                                        </IonList>
                                    </div>

                                    <div style={{ width: '100%'}}>
                                        <label>Estado cívil</label>
                                        <IonList>
                                            <IonItem>
                                                <IonSelect labelPlacement="stacked" value="Solteiro">
                                                    <IonSelectOption value="Solteiro">Solteiro</IonSelectOption>
                                                    <IonSelectOption value="Casado">Casado</IonSelectOption>
                                                </IonSelect>
                                            </IonItem>
                                        </IonList>
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
                                    <p>Preencha suas informações de contato corretamente</p>
                                </div>

                                <div>
                                    <label>Telefone</label>
                                    <IonItem>
                                        <InputMask
                                            mask="(99) 99999-9999"
                                            placeholder="(00) 00000-0000"
                                            className="ion-input-mask"
                                        />
                                    </IonItem>
                                </div>

                                <div>
                                    <label>E-mail</label>
                                    <IonItem>
                                        <IonInput labelPlacement="stacked" placeholder="email@domain.com"></IonInput>
                                    </IonItem>
                                </div>

                                <div>
                                    <label>Valor da sua renda mensal</label>
                                    <IonItem>
                                        <InputMask
                                            mask="R$ 99.999,99"
                                            placeholder="R$ 0,00"
                                            className="ion-input-mask"
                                        />
                                    </IonItem>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="custom-cadastro2-button">
                        <Link to="/cadastro3">
                            <button className="custom-button-modal1">Continuar</button>
                        </Link>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
}

export default Cadastro2;
