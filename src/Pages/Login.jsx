import React from 'react'
import './CSS/Login.css';

export const Login = () => {
  return (
    <div className='login'>
      <div className="logincontainer">
        <h1>Se connecter</h1>
        <div className="loginfields">
          <input type="text" placeholder='Votre nom' />
          <input type="email" placeholder='votrenom@random.com' />
          <input type="password" placeholder='Mot de passe' />
          <button>Continuer</button>
          <p className="loginpar">
            Déja un compte? <span>Connectez vous ici</span>
          </p>
          
        </div>
        <div className='loginagree'>
              <input type="checkbox" name='' id=''/>
              <p>En continuant, j'accepte les termes et conditions</p>
        </div>
        </div>
    </div>
  )
}
