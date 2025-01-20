import React from 'react';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { chatbubbleEllipses, helpCircle, lockClosed, pin, settings, share, trash } from 'ionicons/icons';
import './Profile.css';
function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset={true}>
        <div className="profile-header" style={{display: 'flex', flexDirection: 'row'}}>
          <img
            className="profile-image"
            src="/profile.png"
            alt="Foto do Perfil"
            style={{maxWidth: '80px', borderRadius: '100%', height: '80px', marginRight: '20px', marginTop: '20px'}}
          />
          <div className="profile-info">
            <h2>Nome do Usuário</h2>
            <p>Descrição breve sobre o usuário. Algo interessante ou divertido!</p>
          </div>
        </div>
        <IonList className="profile-options">
          <IonItem button>
            <IonIcon slot="start" icon={lockClosed} />
            <IonLabel>Resetar sua senha</IonLabel>
          </IonItem>
          <IonItem button>
            <IonIcon slot="start" icon={helpCircle} />
            <IonLabel>Ajuda</IonLabel>
          </IonItem>
          <IonItem button>
            <IonIcon slot="start" icon={chatbubbleEllipses} />
            <IonLabel>Dúvidas</IonLabel>
          </IonItem>
          <IonItem button>
            <IonIcon slot="start" icon={settings} />
            <IonLabel>Configurações</IonLabel>
          </IonItem>
        </IonList>
        </IonList>
      </IonContent>
    </>
  );
}
export default Example;