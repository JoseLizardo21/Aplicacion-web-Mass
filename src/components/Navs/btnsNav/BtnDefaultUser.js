import React from 'react';
import { Link } from 'react-router-dom';
import {CiUser} from 'react-icons/ci'

function BtnDefaultUser(){
    return(
        <>
            <button className='btn btn-secondary rounded-circle m-1'
            type="button" data-bs-toggle='collapse' data-bs-target='#optionsDefaultUser' aria-expanded="true" aria-controls="optionsDefaultUser">
                <CiUser/>
            </button>
            <div className="collapse probar" id='optionsDefaultUser'>
                <div className="card card-body">
                    <Link className="btn btn-success" to='/home'>Iniciar sesión</Link>
                </div>
            </div>
        </>
    );
}
export default BtnDefaultUser;