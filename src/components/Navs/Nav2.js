import React from "react";
import BtnMessage from "./btnsNav/BtnMessage";
import NotificationBell from './btnsNav/NotificationBell';
import BtnDefaultUser from "./btnsNav/BtnDefaultUser";
import BtnUser from "./btnsNav/BtnUser";
import MASS_LOGO from '../../public/imgs/icons-logos/MASS_LOGO.png';
import {useSelector} from 'react-redux';

function Nav2(){
    const isLoggedIn = useSelector(state=>state.auth.auth);
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="col">
                    <a className='navbar-brand' href='#'>
                    <img src={MASS_LOGO} id='iconMass'/>
                    </a>
                </div>
                <div className="col">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="col d-flex justify-content-end">
                    {isLoggedIn
                        ?<>
                            <BtnMessage/>
                            <NotificationBell/>
                            <BtnUser/>
                            
                        </>:<BtnDefaultUser/>}
                </div>
            </div>
        </nav>
      )
}
export default Nav2;