import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='secao'>
      <div className='container'>
        <div className='div-form'>
            <h2 class="login">Login</h2>

            <form action="" className='form'>
                <div className='input-box'>
                  <input type="email"/>
                  <label>Email</label>
                </div>
                <div className='input-box'>
                  <input type="password"/>
                  <label>Senha</label>
                </div>
                <button className='button'>Login</button>
            </form>

            <p className='palavra-separacao'>OU</p>
            
            <button className='button-google'>Login com Google</button>

            <button className='button-linkedin'>Login com Linkedin</button>

            <div className='btn-forget-register'>
              <button className='button-forget'>Esqueci minha senha</button>
              <button className='button-register'>Registre-se</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form