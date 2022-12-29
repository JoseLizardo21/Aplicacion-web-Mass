import React from 'react';
import '../../styles/stylesCards/cardsHome.css'
import usuario from '../../public/imgs/imgsHome/usuario.png'
import circleAmarillo from '../../public/imgs/imgsHome/circleAmarillo.png';
import circleAzul from '../../public/imgs/imgsHome/circleAzul.png';
import circleVerde from '../../public/imgs/imgsHome/circleVerde.png';
function MainHomeColumn(){
    return(
        <div className='mt-3 container'>
            <div className='card cardsHome'>
                <div className='text-center mt-3 fs-4 fw-normal '>DESCUBRE NUESTROS
                </div>
                <div className='text-center fs-3 fw-bold text-primary'style={{marginTop: "-11px"}}>DOS MODOS</div>
                <img src={usuario} className='w-25 mx-auto'/>
                <img src={circleAmarillo} className='mx-auto circlesHome' id='circleHome1'/>
                <img src={circleAzul} className='mx-auto circlesHome' id='circleHome2'/>
                <img src={circleVerde} className='mx-auto circlesHome' id='circleHome3'/>
            </div>
        </div>
    )
}
export default MainHomeColumn;