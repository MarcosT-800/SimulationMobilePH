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
import { Link } from "react-router-dom";
import './Loading3.css';
function Loading3() {
    const modal = useRef<HTMLIonModalElement>(null);
    const [user_login, setUser_login] = useState("");
    const [user_pass, setUser_pass] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    useEffect(() => {
        setTimeout(function () {
            window.location.replace('/dashboard');
        }, 5000);
    });

    return (
        <>
            <IonPage>
                <IonContent className="custom-dash-content" scrollY>
                    <div className="custom-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="91" viewBox="0 0 97 91" fill="none">
                            <path d="M12.125 79.625H84.875M24.25 68.25V37.9167M40.4167 68.25V37.9167M56.5833 68.25V37.9167M72.75 68.25V37.9167M80.8333 26.5417L50.2137 8.58812C49.592 8.22361 49.2811 8.04135 48.9478 7.97029C48.653 7.90745 48.347 7.90745 48.0522 7.97029C47.7189 8.04135 47.408 8.22361 46.7863 8.58812L16.1667 26.5417H80.8333Z" stroke="#D70404" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3>Seus dados estão sendo enviados para o banco, por favor aguarde!</h3>

                        <svg className="spinner" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="loading3">
                                <g id="Group">
                                    <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M23.4534 0.0030281C23.3276 0.00101193 23.2015 0 23.0751 0C10.3311 0 0 10.2975 0 23C0 35.7025 10.3311 46 23.0751 46C34.9237 46 44.6865 37.0988 46 25.6393H40.8079C39.531 34.3293 32.0445 41 23 41C13.0589 41 5 32.9411 5 23C5 13.0589 13.0589 5 23 5C23.1516 5 23.3027 5.00187 23.4534 5.0056V0.0030281Z" fill="#D70404" />
                                </g>
                            </g>
                        </svg>

                    </div>
                </IonContent>
            </IonPage>
        </>
    );
}

export default Loading3;
