import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import
     {
         faArrowAltCircleDown, faArrowDown, faArrowRight, faArrowRightArrowLeft, faArrowRightLong, faBars, faGlobe, faL
     }
    from '@fortawesome/free-solid-svg-icons'

import x from '../videos-img/cancel.png'
import s from '../videos-img/search.png'
import minus from '../videos-img/minus (1).png'
import plus from '../videos-img/plus.png'


const Logo = () => {
    const [toggle, setToggle] = useState(false);
    const [btn, setBtn] = useState(false);



    return(
        <>
        <div className='logo-btn'>
            <h2>World's way brand</h2>
            <h3>Store in the Tashkent</h3>
            <div onClick={() => setToggle(toggle ? false : true)}> 
                <FontAwesomeIcon className='globe' icon={faGlobe}/>
                <span>Uzbekistan (Tashkent)</span>
                <FontAwesomeIcon className='arrow' icon={faArrowRightLong} />
            </div>
        </div>


        <div className={`sidebar ${
            toggle ? 'show' : false
        }`}>
            <div className='xMark'>
                <h3>Busca tu mercado</h3>
                <img onClick={() => setToggle(false)} src={x}/>
            </div>

            <div className='block-input'>
                <img src={s} />
                <input
                 type="text"
                 placeholder='Type to find'
                />
            </div>
           <div className='h4'>
             <h4>Seleccionar otro mercado:</h4>
           </div>

            <div className='list'>
                <ul>
                    <li onClick={() => setBtn(btn ? false : true)}>america <span><img src={plus} /></span>
                   {btn && ( <div>
                            <ul className='little_list'>
                                <li>asia <span><img src={plus} /></span></li>
                                <li>europa <span><img src={plus} /></span></li>
                                <li>oceania <span><img src={plus} /></span></li>
                                <li>africa <span><img src={plus} /></span></li>
                                <li>sea <span><img src={plus} /></span></li>
                                <li>sea <span><img src={plus} /></span></li>
                            </ul>
                        </div>)}
                    </li>
                    <li>asia <span><img src={plus} /></span></li>
                    <li>europa <span><img src={plus} /></span></li>
                    <li>oceania <span><img src={plus} /></span></li>
                    <li>africa <span><img src={plus} /></span></li>
                    <li>sea <span><img src={plus} /></span></li>
                </ul>
         
            </div>

        </div>
        </>
    )
}

const Mens = () => {
    return(
        <div className='mens'>
            <button>Woman</button>
            <button>Kids</button>
        </div>
    )
}

const Cookie = () => {
    return (
        <div className='cookie'> 
            Configuración de cookies
        </div>
    )
}






const Text = () => {


  return (
    <>
    <Logo />
    <Mens />
    <Cookie />
    </>
  )
}

export default Text;