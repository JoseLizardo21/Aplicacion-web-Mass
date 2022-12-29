import React from "react";
import { Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {RiTeamFill} from 'react-icons/ri';
import {IoMegaphone} from 'react-icons/io5'
function Nav3(){
    return(
        <div className="col d-flex flex-column p-3">
            <button className="btn border-0 p-1 d-flex align-items-center">
                <AiFillHome className="fs-5"/>
                <Link to="#" className="ms-2 text-secondary fs-5 text-decoration-none">Inicio</Link>
            </button>
            <button className="btn border-0 p-1 d-flex align-items-center">
                <BsFillBagCheckFill className="fs-5"/>
                <Link to="#" className="ms-2 text-secondary fs-5 text-decoration-none">Chambas para ti</Link>
            </button>
            <button className="btn border-0 p-1 d-flex align-items-center">
                <RiTeamFill className="fs-5"/>
                <Link to="#" className="ms-2 text-secondary fs-5 text-decoration-none">Equipos</Link>
            </button>
            <button className="btn border-0 p-1 d-flex align-items-center">
                <IoMegaphone className="fs-5"/>
                <Link to="#" className="ms-2 text-secondary fs-5 text-decoration-none">Mis anuncios</Link>
            </button>
        </div>
    );
}
export default Nav3;