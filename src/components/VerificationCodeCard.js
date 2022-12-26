import React, {Component} from "react";
import '../styles/stylesCards/verificationCode.css';
import {helpFetch} from '../helpers/helpFetch';

class VerificationCodeCard extends Component{
    constructor(){
        super();
        this.API = helpFetch;
    }
    envCode = async(e)=>{
        e.preventDefault();
        const {code} = e.target;
        const codeEnv = {
            code: code.value
        }
        const res = await this.API.post('VerifyAccount',{
            mode: 'cors',
            credentials: 'include',
            body: codeEnv
        });
        console.log(res.success)
    }
    render(){
        return(
            <div id="verificationCodeCard" className="card mx-auto mt-5 p-2" style={{width: '20rem'}}>
                    <div className="card-title text-center">
                        Verificación de código
                    </div>
                <div className="card-body">
                    <form onSubmit={this.envCode}>
                        <div className="mb-3">
                            <input type='number' name="code" id="code" className="form-control text-center" placeholder="Escribe tu código de verificación"></input>
                        </div>
                        <div className="mb-1">
                            <button className='btn btn-success w-100' type='submit'>Verificar</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default VerificationCodeCard;