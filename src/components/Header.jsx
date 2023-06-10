import React, {useState} from 'react'
import Form from './Form'
import './Header.css'

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className=''>
        <header className='cabecalho'>
          <h1 className='name'>Login</h1>
          <nav className='menu'>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
            <button className='btn-login' onClick={() => setShowForm(true)}>Login</button>
          </nav>
        </header>
      </div>

      {showForm && <Form />}
    </>
  )
}

export default Header