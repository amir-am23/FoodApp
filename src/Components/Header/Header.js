import React from 'react'
import Styles from './Header.module.scss'
import Menu from '../Menu/Menu'

function Header() {
    return (
        <header className={`${Styles.Header__Container} 'container'`}>
            <Menu />
        </header>
    )
}

export default Header
