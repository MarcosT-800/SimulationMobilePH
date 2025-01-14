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
import Dashboard from './pages/Dashboard/Page';

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
import './pages/app.css';
/* Theme variables */
import './theme/variables.css';
import Simulation1 from './pages/Simulation/Simulation1';
import Simulation2 from './pages/Simulation/Simulation2';

setupIonicReact();

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  // Verifica a autenticação ao carregar o aplicativo
  useEffect(() => {
    setIsAuthenticated(false);
    /* const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token); // Atualiza o estado com base no token */
  }, []);

  const showTabBar = !['/GetStarted', '/login'].includes(location.pathname);
  const [activeIndex, setActiveIndex] = useState(0); // Estado para controlar o card ativo

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
            <Route exact path="/simulation1">
             <Simulation1 />
            </Route>
            <Route exact path="/simulation2">
             <Simulation2 />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/GetStarted">
              <GetStarted />
            </Route>
            <Route exact path="/">
              <Redirect to="/GetStarted" />
            </Route>
          </IonRouterOutlet>

          {showTabBar && (
            <IonTabBar slot="bottom" className="tabbar">
              <IonTabButton tab="tab1" href="/dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66667 2.25C2.70017 2.25 1.91667 3.0335 1.91667 4V13C1.91667 13.9665 2.70017 14.75 3.66667 14.75H10.1667C11.1332 14.75 11.9167 13.9665 11.9167 13V4C11.9167 3.0335 11.1332 2.25 10.1667 2.25H3.66667Z" fill="#D70404" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1667 21.75C14.2002 21.75 13.4167 20.9665 13.4167 20V11C13.4167 10.0335 14.2002 9.25 15.1667 9.25H21.6667C22.6332 9.25 23.4167 10.0335 23.4167 11V20C23.4167 20.9665 22.6332 21.75 21.6667 21.75H15.1667Z" fill="#D70404" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91667 18C1.91667 17.0335 2.70017 16.25 3.66667 16.25H10.1667C11.1332 16.25 11.9167 17.0335 11.9167 18V20C11.9167 20.9665 11.1332 21.75 10.1667 21.75H3.66667C2.70017 21.75 1.91667 20.9665 1.91667 20V18Z" fill="#D70404" />
                  <path d="M15.1667 7.75C14.2002 7.75 13.4167 6.9665 13.4167 6V4C13.4167 3.0335 14.2002 2.25 15.1667 2.25H21.6667C22.6332 2.25 23.4167 3.0335 23.4167 4V6C23.4167 6.9665 22.6332 7.75 21.6667 7.75H15.1667Z" fill="#D70404" />
                </svg>
                <IonLabel className={`label-menu ${activeIndex === 0 ? "active" : ""}`} onClick={() => setActiveIndex(0)}>Menu</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 14.5C14.5858 14.5 14.25 14.8358 14.25 15.25C14.25 15.6642 14.5858 16 15 16H18C18.4142 16 18.75 15.6642 18.75 15.25C18.75 14.8358 18.4142 14.5 18 14.5H15Z" fill="#8C8892" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 6.25C1.25 4.73122 2.48122 3.5 4 3.5H20C21.5188 3.5 22.75 4.73122 22.75 6.25V17.75C22.75 19.2688 21.5188 20.5 20 20.5H4C2.48122 20.5 1.25 19.2688 1.25 17.75V6.25ZM4 5C3.30964 5 2.75 5.55964 2.75 6.25V9.75H21.25V6.25C21.25 5.55964 20.6904 5 20 5H4ZM2.75 17.75V11.25H21.25V17.75C21.25 18.4404 20.6904 19 20 19H4C3.30964 19 2.75 18.4404 2.75 17.75Z" fill="#8C8892" />
                </svg>
                <IonLabel className={`label-menu ${activeIndex === 1 ? "active" : ""}`} onClick={() => setActiveIndex(1)}>Minhas propostas</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4551 1.54395C14.858 1.133 14.0449 1.56047 14.0449 2.28534V3.50001H5.58331C3.92646 3.50001 2.58331 4.84316 2.58331 6.50001C2.58331 8.15686 3.92646 9.50001 5.58331 9.50001H14.0449V10.7147C14.0449 11.4395 14.858 11.867 15.4551 11.4561L21.4593 7.32377C22.0367 6.92637 22.0367 6.07365 21.4593 5.67625L15.4551 1.54395ZM15.5449 5.00001V3.42665L20.0104 6.50001L15.5449 9.57337V8.00001H5.58331C4.75488 8.00001 4.08331 7.32844 4.08331 6.50001C4.08331 5.67158 4.75489 5.00001 5.58331 5.00001H15.5449Z" fill="#8C8892" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82848 12.5676C9.42326 12.1341 10.2585 12.559 10.2585 13.2949V14.5H18.0833C19.7402 14.5 21.0833 15.8432 21.0833 17.5C21.0833 19.1569 19.7402 20.5 18.0833 20.5H10.2585V21.7051C10.2585 22.441 9.42326 22.8659 8.82848 22.4325L3.16887 18.3082C2.62078 17.9088 2.62079 17.0912 3.16887 16.6918L8.82848 12.5676ZM8.75853 16V14.4746L4.6068 17.5L8.75853 20.5255V19H18.0833C18.9117 19 19.5833 18.3284 19.5833 17.5C19.5833 16.6716 18.9117 16 18.0833 16H8.75853Z" fill="#8C8892" />
                </svg>
                <IonLabel className={`label-menu ${activeIndex === 2 ? "active" : ""}`} onClick={() => setActiveIndex(2)}>Saque FGTS</IonLabel>
              </IonTabButton>
            </IonTabBar>
          )}
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
