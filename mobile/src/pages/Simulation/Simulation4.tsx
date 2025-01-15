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
import './Simulation4.css';
import { Link } from "react-router-dom";
function Simulation4() {
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

                    <div className="custom-simulation4-content">

                        <div className="custom-simulation4-resumo">
                            <h3>Resumo da antecipação</h3>
                            <p>O valor do empréstimo é descontado anualmente do saldo do FGTS em parcelas, de forma automática.</p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="420" height="2" viewBox="0 0 328 2" fill="none">
                            <path d="M0 1H328" stroke="#F0F0F0" />
                        </svg>

                        <div className="custom-simulation4-valores">
                            <p>Valor a receber</p>
                            <h3>R$ 000,00</h3>
                        </div>

                        <div className="custom-simulation4-valores">
                            <p>Antecipação</p>
                            <h3>7 Anos</h3>
                        </div>

                        <div className="custom-simulation4-valores">
                            <p>FGTS a ser desbloqueado</p>
                            <h3>R$ 000,00</h3>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="420" height="2" viewBox="0 0 328 2" fill="none">
                            <path d="M0 1H328" stroke="#F0F0F0" />
                        </svg>

                        <div className="custom-simulation4-aprovacao">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 4.79086 1.79086 3 4 3H20C22.2091 3 24 4.79086 24 7V17C24 19.2091 22.2091 21 20 21H4C1.79086 21 0 19.2091 0 17V7ZM4 5C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H4Z" fill="#D70404" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1038 9.70769C10.9089 9.86122 10.8574 10.0131 10.8574 10.1204C10.8574 10.2813 10.8951 10.3689 11.0359 10.4869C11.2324 10.6515 11.607 10.8398 12.2855 11.0417C13.0776 11.2774 13.7787 11.5735 14.29 12.0177C14.8559 12.5093 15.1431 13.1426 15.1431 13.8798C15.1431 15.6428 13.481 16.5716 12.0003 16.5716C10.3729 16.5716 8.85742 15.3329 8.85742 13.6919C8.85742 13.1396 9.30514 12.6919 9.85742 12.6919C10.4097 12.6919 10.8574 13.1396 10.8574 13.6919C10.8574 14.0233 11.2607 14.5716 12.0003 14.5716C12.4012 14.5716 12.714 14.4511 12.904 14.3043C13.0836 14.1655 13.1431 14.0195 13.1431 13.8798C13.1431 13.7242 13.1089 13.6409 12.9784 13.5275C12.7932 13.3667 12.4229 13.1693 11.715 12.9586C10.9664 12.7358 10.2696 12.4541 9.7515 12.02C9.17766 11.5393 8.85742 10.8994 8.85742 10.1204C8.85742 8.41909 10.5001 7.42871 12.0003 7.42871C13.6276 7.42871 15.1431 8.66741 15.1431 10.3084C15.1431 10.8607 14.6954 11.3084 14.1431 11.3084C13.5908 11.3084 13.1431 10.8607 13.1431 10.3084C13.1431 9.97696 12.7398 9.42871 12.0003 9.42871C11.6146 9.42871 11.3013 9.55215 11.1038 9.70769Z" fill="#D70404" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12.5523 6 13 6.44772 13 7L13 8.42857C13 8.98086 12.5523 9.42857 12 9.42857C11.4477 9.42857 11 8.98086 11 8.42857L11 7C11 6.44772 11.4477 6 12 6Z" fill="#D70404" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.5713C12.5523 14.5713 13 15.019 13 15.5713L13 16.9999C13 17.5521 12.5523 17.9999 12 17.9999C11.4477 17.9999 11 17.5521 11 16.9999L11 15.5713C11 15.019 11.4477 14.5713 12 14.5713Z" fill="#D70404" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 8C20.7909 8 19 6.20914 19 4H21C21 5.10457 21.8954 6 23 6V8Z" fill="#D70404" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 16C20.7909 16 19 17.7909 19 20H21C21 18.8954 21.8954 18 23 18V16Z" fill="#D70404" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C3.20914 8 5 6.20914 5 4H3C3 5.10457 2.10457 6 1 6V8Z" fill="#D70404" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 16C3.20914 16 5 17.7909 5 20H3C3 18.8954 2.10457 18 1 18V16Z" fill="#D70404" />
                            </svg>
                            <p>Disponível em até 2 dias úteis após aprovação.</p>
                        </div>

                        <div className="custom-simulation4-parcelas">
                            <h3>Primeira parcela</h3>
                            <h4>Janeiro 2025</h4>
                        </div>

                    </div>
                    <div className="custom-simulation4-detalhes"  onClick={toggleParcelas}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.3335 3.82922C4.59712 3.82922 4.00016 4.36793 4.00016 5.03247V24.2845C4.00016 24.949 4.59712 25.4878 5.3335 25.4878H18.6668C19.4032 25.4878 20.0002 24.949 20.0002 24.2845V5.03247C20.0002 4.36793 19.4032 3.82922 18.6668 3.82922H5.3335ZM1.3335 5.03247C1.3335 3.03886 3.12436 1.42271 5.3335 1.42271H18.6668C20.876 1.42271 22.6668 3.03886 22.6668 5.03247V24.2845C22.6668 26.2781 20.876 27.8943 18.6668 27.8943H5.3335C3.12436 27.8943 1.3335 26.2781 1.3335 24.2845V5.03247Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9998 8.64223C27.9998 7.97769 27.4029 7.43897 26.6665 7.43897L22.6665 7.43897L22.6665 21.878L26.6665 21.878C27.4029 21.878 27.9998 21.3393 27.9998 20.6747L27.9998 8.64223ZM26.6665 5.03247C28.8756 5.03247 30.6665 6.64861 30.6665 8.64223L30.6665 20.6747C30.6665 22.6684 28.8756 24.2845 26.6665 24.2845L19.9998 24.2845L19.9998 5.03247L26.6665 5.03247Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6668 13.4552H21.3335V11.0487H28.6668V13.4552Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.3335 8.64224C5.3335 7.31316 6.5274 6.23573 8.00016 6.23573H16.0002C17.4729 6.23573 18.6668 7.31316 18.6668 8.64224V11.0487C18.6668 12.3778 17.4729 13.4552 16.0002 13.4552H8.00016C6.5274 13.4552 5.3335 12.3778 5.3335 11.0487V8.64224ZM16.0002 8.64224H8.00016V11.0487H16.0002V8.64224Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.3335 17.065C5.3335 16.4005 5.93045 15.8617 6.66683 15.8617H6.68016C7.41654 15.8617 8.0135 16.4005 8.0135 17.065C8.0135 17.7295 7.41654 18.2682 6.68016 18.2682H6.66683C5.93045 18.2682 5.3335 17.7295 5.3335 17.065Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.3335 21.878C5.3335 21.2135 5.93045 20.6747 6.66683 20.6747H6.68016C7.41654 20.6747 8.0135 21.2135 8.0135 21.878C8.0135 22.5425 7.41654 23.0812 6.68016 23.0812H6.66683C5.93045 23.0812 5.3335 22.5425 5.3335 21.878Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6665 17.065C10.6665 16.4005 11.2635 15.8617 11.9998 15.8617H12.0132C12.7495 15.8617 13.3465 16.4005 13.3465 17.065C13.3465 17.7295 12.7495 18.2682 12.0132 18.2682H11.9998C11.2635 18.2682 10.6665 17.7295 10.6665 17.065Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6665 21.878C10.6665 21.2135 11.2635 20.6747 11.9998 20.6747H12.0132C12.7495 20.6747 13.3465 21.2135 13.3465 21.878C13.3465 22.5425 12.7495 23.0812 12.0132 23.0812H11.9998C11.2635 23.0812 10.6665 22.5425 10.6665 21.878Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 17.065C16 16.4005 16.597 15.8617 17.3333 15.8617H17.3467C18.083 15.8617 18.68 16.4005 18.68 17.065C18.68 17.7295 18.083 18.2682 17.3467 18.2682H17.3333C16.597 18.2682 16 17.7295 16 17.065Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21.878C16 21.2135 16.597 20.6747 17.3333 20.6747H17.3467C18.083 20.6747 18.68 21.2135 18.68 21.878C18.68 22.5425 18.083 23.0812 17.3467 23.0812H17.3333C16.597 23.0812 16 22.5425 16 21.878Z" fill="white" />
                        </svg>

                        <p>Detalhes das parcelas atuais</p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.68309C4.90237 9.07362 4.90237 9.70678 5.29289 10.0973L11.2929 16.0973C11.6834 16.4878 12.3166 16.4878 12.7071 16.0973L18.7071 10.0973C19.0976 9.70678 19.0976 9.07362 18.7071 8.68309C18.3166 8.29257 17.6834 8.29257 17.2929 8.68309L12 13.976L6.70711 8.68309C6.31658 8.29257 5.68342 8.29257 5.29289 8.68309Z" fill="white" />
                        </svg>

                    </div>

                    {isParcelasVisible && (
                             <IonCardContent>
                             <IonList>
                               <IonItem>
                                 <IonThumbnail slot="start">
                                   <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                 </IonThumbnail>
                                 <IonLabel>Primera Parcela</IonLabel>
                                 <p>R$ 000,00</p>
                               </IonItem>
                     
                               <IonItem>
                                 <IonThumbnail slot="start">
                                   <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                 </IonThumbnail>
                                 <IonLabel>Segunda Parcela</IonLabel>
                                 <p>R$ 000,00</p>

                               </IonItem>
                     
                               <IonItem>
                                 <IonThumbnail slot="start">
                                   <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                 </IonThumbnail>
                                 <IonLabel>Tercenira Parcela</IonLabel>
                                 <p>R$ 000,00</p>
                               </IonItem>
                     
                               <IonItem lines="none">
                                 <IonThumbnail slot="start">
                                   <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                 </IonThumbnail>
                                 <IonLabel>Quarto Parcela</IonLabel>
                                 <p>R$ 000,00</p>
                               </IonItem>
                             </IonList>
                           </IonCardContent>
                        )}
                    <div className="custom-content-check">

                        <div className="check">
                            <input type="checkbox" />
                            <p className="p_credenciais">Li e estou de acordo com o aviso de <span>privacidade</span> e a <span>politica de serviços</span> da <span>PH negócios</span></p>
                        </div>
                    </div>
                    <div className="custom-button-content">


                        <Link to="/cadastro1">
                            <button
                                className="custom-button-modal"
                            >Ir para o cadastro</button>
                        </Link>

                        <Link to="/simulation3">
                            <button
                                className="custom-button-modal2"
                            >Cancelar</button>
                        </Link>


                    </div>

                </IonContent>
            </IonPage>
        </>
    );
}

export default Simulation4;
