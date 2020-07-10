import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import Logo from '../../images/Logo.png'
import Styles from './Menu.module.scss'

function Menu() {
    return (
        <div className={Styles.Menu}>
            <div className={Styles.Pull__Right}>
                <div>
                    <a href='/'><IoIosSearch /></a>
                </div>
                <div >
                    <a href='/'>LogIn</a>
                </div>
            </div>

            <div className={Styles.Center}>
                <ul>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Orders</a></li>
                    <li><a href='/'>Delivery</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </div>

            <div className={Styles.pull___Left}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <span className={Styles.Food}>FOOD</span>
                    <span className={Styles.Fusion}>FUSION</span>
                </div>
                <div><img src={Logo} alt='chieficon' /></div>
            </div>
        </div>
    )
}

export default Menu
