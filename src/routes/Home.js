import React from "react";
import {Navigate} from 'react-router-dom'
import Nav from "../components/Nav";
import VerificationCodeCard from "../components/VerificationCodeCard";
import {useSelector} from 'react-redux';

function Home(){
    const isLoggedIn = useSelector(state=>state.auth);
    const cardCode = false;
    if(isLoggedIn){
        return(
            <Navigate to="hola"/>
        );
    }
    return(
        <div>
            <Nav/>
            {cardCode ? <VerificationCodeCard/> : null}
        </div>
    );
}
export default Home;