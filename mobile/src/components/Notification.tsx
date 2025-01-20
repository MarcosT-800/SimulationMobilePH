import React, { useState } from 'react';
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
  IonBadge,
  IonModal,
  IonButton,
  IonNote,
} from '@ionic/react';
import { pin, share, trash, close } from 'ionicons/icons';

function Example() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

  const users = [
    {
      name: 'Rick Astley',
      avatar: '/profile.png',
      notifications: 3,
      description: 'You have 3 new messages!',
      message: 'Hey! Never gonna give you up, never gonna let you down!',
    },
    {
      name: 'Leeroy Jenkins',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      notifications: 5,
      description: 'Check your latest updates.',
      message: 'Time to charge into the battle!',
    },
    {
      name: 'Ionitron',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      notifications: 0,
      description: 'All systems operational.',
      message: 'Hello! Ready to assist you with Ionic.',
    },
    {
      name: 'Wall-E',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      notifications: 2,
      description: '2 messages waiting for you.',
      message: 'Wall-E loves collecting treasures!',
    },
    {
      name: 'Cortana',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      notifications: 4,
      description: 'Don’t miss your reminders.',
      message: 'Let me help you organize your day!',
    },
    {
      name: 'Bender',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      notifications: 1,
      description: 'New mission alert!',
      message: 'Bite my shiny metal...',
    },
    {
      name: 'BB-8',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      notifications: 0,
      description: 'No new notifications.',
      message: 'Beep boop! All systems are go.',
    },
  ];

  const openMessage = (user: React.SetStateAction<null>) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Minhas Notificações</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset={true}>
          {users.map((user, index) => (
            <IonItemSliding key={index}>
              <IonItem button={true} onClick={() => openMessage(user)}>
                <IonAvatar slot="start">
                  <img alt={user.name} src={user.avatar} />
                </IonAvatar>
                <IonLabel>
                  <h2>{user.name}</h2>
                  <p>{user.description}</p>
                  {user.notifications > 0 && (
                    <IonBadge color="danger" slot="end" style={{ marginTop: '4px' }}>
                      {user.notifications}
                    </IonBadge>
                  )}
                </IonLabel>
              </IonItem>
              <IonItemOptions slot="end">
                <IonItemOption color="warning">
                  <IonIcon slot="icon-only" icon={pin}></IonIcon>
                </IonItemOption>
                <IonItemOption color="tertiary">
                  <IonIcon slot="icon-only" icon={share}></IonIcon>
                </IonItemOption>
                <IonItemOption color="danger" expandable={true}>
                  <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>

        {/* Modal to display message */}
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Message</IonTitle>
              <IonButton
                slot="end"
                fill="clear"
                onClick={() => setShowModal(false)}
              >
                <IonIcon icon={close}></IonIcon>
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {selectedUser && (
              <div style={{ padding: '16px' }}>
                <h2>{selectedUser.name}</h2>
                <p>{selectedUser.message}</p>
              </div>
            )}
          </IonContent>
        </IonModal>
      </IonContent>
    </>
  );
}

export default Example;
