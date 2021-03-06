import React, {useState} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import './LandingPage.css';
import {useEffect} from "react";
import RegistrationModal from '../RegistrationModal/RegistrationModal';
import {setModal} from "../../store/action/modalAction";
import LoginModal from '../LoginModal/LoginModal';
import Psychologists from '../Psychologists/Psychologists';
import Header from "../Header/Header";

const LandingPage = (props) => {
    let [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        props.dispatch(psychologistsAction());
    }, []);

    const handleSidebar = (e) => {
        e.preventDefault();
        setShowSidebar(!showSidebar);
    };

    const handdleMoreDoctors = (e) => {
        e.preventDefault();
        props.history.push('/doctorList');
    };

    const handdleAbout = (e) => {
        e.preventDefault();
        document.getElementById('aboutUsDiv').scrollIntoView();
        
    };

    const handdleContact = (e) => {
        e.preventDefault();
        document.getElementById('downContainer').scrollIntoView();
    };

    const handdleDown = (e) => {
        e.preventDefault();
        document.getElementById('dialog2').scrollIntoView();
    };

    const handdleProfile = (e) => {
        e.preventDefault();
        if (props.tokens.user.is_user === true) {
            props.history.push('/userprofile');
        }
        else if (props.tokens.user.is_psychologist === true) {
            props.history.push('/psychologist/me');
        }
    };

    const handleOpen = (namespace) => props.dispatch(setModal(namespace, null, true));

    let sideBarClassName = '';
    if (showSidebar){
        sideBarClassName = 'sidebarBox sidebarVisible';
    } else {
        sideBarClassName = 'sidebarBox';
    }

    let sidebarToggle = '';
    if (showSidebar) {
        sidebarToggle = 'sidebarToggle sidebarToggleVisible';
    } else {
        sidebarToggle = 'sidebarToggle';
    }

    let newList = props.psychologists.slice(0, 3);
    
    return (
        <div className='landingPage'>
            <Header/>

            <div className={sideBarClassName}>{showSidebar}
                <p className='sidebarText' onClick={(e) => handdleAbout(e)}>About us</p>
                {!props.authenticated && <p className='sidebarText' type='submit' onClick={() => handleOpen("RegistrationModal")}>Sign up</p>}
                {!props.authenticated && <p className='sidebarText' type='submit' onClick={() => handleOpen("LoginModal")}>Login</p>}
                <p className='sidebarText' onClick={(e) => handdleMoreDoctors(e)}>Psychologists List</p>
                <p className='sidebarText' onClick={(e) => handdleContact(e)}> Contact</p>

                {props.authenticated && <p className='sidebarText' onClick={(e) => handdleProfile(e)}> Profile</p>}
            </div>            

            <RegistrationModal />
            <LoginModal />

            <div className='parallax1'>
                
                <div className="layer">

                <div className={sidebarToggle}  onClick={(e) => handleSidebar(e)}>
                    <div className='sidebarLine'></div>
                    <div className='sidebarLine'></div>
                    <div className='sidebarLine'></div>
                </div>
                    <div className='lpLogo'>

                    </div>

                    <h1 id="text">
                        Discover Deep Trust
                    </h1>
                    <div className='naming-container'>
                    <span className='lp-tagline'>
                        Your personal guides in difficult moments
                    </span>
                    </div>
        
                </div>
                <div>
                    <div id="dialog2" className="triangle_down1" onClick={handdleDown}></div>
                </div>
            </div>

            <div id='aboutUsDiv'>

            </div>

            <div className='middleImageContainer' id='middleContainer'>
                <div className='leftMiddleImage'></div>

                <div className='rightMiddleImage'>
                        <div className='about-us-container'>
                        <span id="textMiddleImage">
                            About Deep Trust
                        </span>
                        <p className='about-us-text'>Deep Trust is a platform that supports you in
                           a difficult moment. If you experience pressure,
                           apathy to this life, mental instability, then you
                           can always contact our specialists to guide
                           you trough the problem. Our special feature is
                           your personality protection - incognito mode
                           during consultations.
                        </p>
                        </div>
                        </div>
                </div>
            

            <div className='psychologistsContainer'>
                <p className='psychoList'>People you can trust</p>
                    <Psychologists psychologists={newList}/>
            </div>
            <div className='buttoWrapper'>
                <button className='displayMoreDocs' onClick={(e) => handdleMoreDoctors(e)}>More</button>
            </div>
            
            <div className='parallax2' id='downContainer'>
                <div className="squareInfo">
                    <div className='tittleQustions'>
                        <p id="text2">
                            More questions?
                        </p>
                    </div>
                    <div>
                        <form className='inputQuestionsForm'>
                            <input className='qustionaryInput' placeholder={'Name'} name='name'  />
                            <input className='qustionaryInput' placeholder={'Email'} name='email' />
                            <textarea className='qustionaryInputText' placeholder={'Comments'} name='comments' />
                            <button className='qustionaryButton'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
    );
};

const mapStateToProps = state => {
    return {
        psychologists: state.psychologistsReducer.psychologists,
        authenticated: state.loginReducer.authenticated,
        tokens: state.loginReducer.tokens,
    };
};

export default connect(mapStateToProps)(LandingPage);

