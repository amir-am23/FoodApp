import React from 'react'
import Styles from './MainHeader.module.scss'
import Options from '../Header__Options/HeaderOptions'
import { IoIosArrowRoundForward } from "react-icons/io";
// Icon Options 
import burger from '../../images/burger.png'
// Header Image
import mh from '../../images/mh.png'
// Svgs
import Facebook from '../Social__media/facebook'
import Twitter from '../Social__media/twitter'
import Instagram from '../Social__media/instagram'

function MainHeader() {
    return (
        <div className={Styles.Main__Header__Wrapper}>
            {/* Left Side */}
            <div className={Styles.Left___Side}>
                <div>
                    <div className={Styles.Title__1}>
                        <h1>The best</h1>
                    </div>
                    <div className={Styles.Title__2}>
                        <h1>delicious food</h1>
                    </div>
                    <div className={Styles.Main__Header__Subtitle}>
                        <h4>That meets your need</h4>
                    </div>
                </div>
                <div className={Styles.options__Wrapper}>
                    <Options imagesource={burger} />
                    <Options imagesource={burger} />
                    <Options imagesource={burger} />
                    <Options imagesource={burger} />
                    <Options imagesource={burger} />
                </div>
                <div className={Styles.Main__Header__IB}>
                    <input type='text' placeholder='Enter Zip Code' className={Styles.Main__Header__Input} />
                    <button className={Styles.Main__Header__Button}>
                        <IoIosArrowRoundForward
                            style={
                                {
                                    fontSize: '37px', fill: 'white'
                                }
                            } />
                    </button>
                </div>
                <div className={Styles.Social__Media}>
                    <div><a href='/'><Facebook/></a></div>
                    <div><a href='/'><Instagram/></a></div>
                    <div><a href='/'><Twitter/></a></div>
                </div>
            </div>

            {/* Right Side */}
            <div className={Styles.Image__Header}>
                <img src={mh} width='550px' className='img-fluid' alt='mh' />
                <div>
                    <div className={Styles.off__Wrapper}>
                        <div className={Styles.Off__Child}>
                            <span>30%</span>
                            <span>Off</span>
                        </div>
                    </div>
                </div>

                <div className={Styles.circle__Under__Off}>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader
