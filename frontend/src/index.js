import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LandingPage from './components/LandingPage/LandingPage';
import VideoChat from './components/TwilioVideo/VideoChat';
import Verification from './components/Verification/Verification';
import DoctorVerification from './components/DoctorVerification/DoctorVerification';
import UserProfile from "./components/UserProfile/UserProfile";
import PsychologistsList from './components/PsychologistsList/PsychologistsList';
import PsychologistProfile from './components/PsychologistProfile/PsychologistProfile';
import Calendar from './components/UserProfile/UserFavoritePsychologistList/BookingCalendar/Calendar';

const loadState = () => {
    try {
      const serializedState = localStorage.getItem('access');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
};

const payload = loadState();

const action = {
    type: 'LOGIN_USER',
    payload,
};

if (payload) {
    store.dispatch(action);
}



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/verification' component={Verification}/>
                    <Route exact path='/doctorVerification' component={DoctorVerification}/>
                    <Route path='/video' component={VideoChat} />
                    <Route path='/userprofile' component={UserProfile}/>
                    <Route exact path='/doctorList' component={PsychologistsList}/>
                    <Route path='/psychologist/me' component={PsychologistProfile} />
                    <Route exact path='/calendar' component={Calendar} />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();