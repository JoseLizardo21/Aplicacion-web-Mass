import React, {useState} from "react";
import {Navigate} from 'react-router-dom'
import Nav from "../components/Navs/Nav";
import MainHomeColumn from '../components/Home/MainHomeColumn';
import VerificationCodeCard from "../components/VerificationCodeCard";
import {useSelector} from 'react-redux';

function Home(){
    const [boolCardCode, setboolCardCode] = useState(false);
    const isLoggedIn = useSelector(state=>state.auth.auth);
    const modifyCardhash = ()=>{
        setboolCardCode({boolCardCode: true});
    }
    return(
        <div>
            {isLoggedIn?
                <Navigate to="/"/>
                :
                <div>
                    <Nav modifyCardCode={modifyCardhash} />
                    {boolCardCode? <VerificationCodeCard/>: null}
                </div>
            }
            <MainHomeColumn/>
        </div>
    )
}

export default Home;