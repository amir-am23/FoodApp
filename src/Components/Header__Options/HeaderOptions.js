import React from 'react'
import Styles from './HeaderOptions.module.scss'

function HeaderOptions({imagesource}) {
    return (
        <div>
            <div className={Styles.Options__Wrapper}>
                <div className={Styles.Options__Icon} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div >
                        <img src={imagesource}  alt='pizzaIcon'/>
                    </div>
                </div>
                <span>Text</span>
            </div>
            
        </div>
    )
}

export default HeaderOptions
