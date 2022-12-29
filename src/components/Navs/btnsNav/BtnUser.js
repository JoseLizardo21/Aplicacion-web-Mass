import React from "react";
import { helpFetch } from "../../../helpers/helpFetch";
import { useDispatch} from 'react-redux';
import { getAuth } from '../../../feachures/auth/authSlice';
import {CiUser} from 'react-icons/ci'
import '../../../public/styles/stylesNav/stylesBtnsNav/styleBtnOptionsUser.css';
function BtnUser(){
    const dispatch = useDispatch();
    const API = helpFetch();
    const logout = async()=>{
        await API.get('logout');
        dispatch(getAuth())
    }
    return(
        <>
            <button className='btn btn-secondary rounded-circle m-1'
            type="button" data-bs-toggle='collapse' data-bs-target='#optionsUser' aria-expanded="true" aria-controls="optionsUser">
                <CiUser/>
            </button>
            <div className="collapse probar" id='optionsUser'>
                <div className="card card-body">
                    <button className="btn btn-success" onClick={logout}>Cerrar sesión</button>
                </div>
            </div>
        </>
    );
}
export default BtnUser;