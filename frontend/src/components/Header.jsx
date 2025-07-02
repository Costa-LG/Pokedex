import React from 'react'


const Header = () => {
  return (
    <header>
        <h1>
            <a className='header__link' href="/">
                Pokédex
            </a>
        </h1>

        <h4>
            <a className='header__link' href="/Tipos">
                Tipos
            </a>
        </h4>
    </header>
  )
}

export default Header