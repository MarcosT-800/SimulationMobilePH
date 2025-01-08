import React, { useEffect, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Login from './pages/Login/Login'; // Página de login
import GetStarted from './pages/GetStarted';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  // Verifica a autenticação ao carregar o aplicativo
  useEffect(() => {
    /* const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token); // Atualiza o estado com base no token */
  }, []);

  const showTabBar = !['/GetStarted', '/login'].includes(location.pathname);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet className='background-primary'>
            <Route exact path="/login">
              <Login setIsAuthenticated={(value) => setIsAuthenticated(value)} />
            </Route>
            <Route exact path="/tab1">
              {isAuthenticated ? <Tab1 /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/tab2">
              {isAuthenticated ? <Tab2 /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/tab3">
              {isAuthenticated ? <Tab3 /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/GetStarted">
              <GetStarted />
            </Route>
            <Route exact path="/">
              <Redirect to="/GetStarted" />
            </Route>
          </IonRouterOutlet>
          
          {showTabBar && (
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2 teste</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={square} />
              <IonLabel>Tab  t3</IonLabel>
            </IonTabButton>
          </IonTabBar>
          )}
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
