import React from 'react'
import Menu from '../Menu/Menu'
import MainHeader from '../Main_Header/MainHeader'

function Header() {
    return (
        <header className='container'>
            <Menu />
            <MainHeader/>
        </header>
    )
}

export default Header
