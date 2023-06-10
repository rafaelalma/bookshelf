// 🐨 you'll need to import react and createRoot from react-dom up here
import React, {StrictMode, useState} from 'react'
import {createRoot} from 'react-dom/client'
import {Dialog} from '@reach/dialog'

import {Logo} from 'components/logo'
import LoginForm from 'components/LoginForm'

import '@reach/dialog/styles.css'

function App() {
  const [openModal, setOpenModal] = useState('none')

  const handleLoginClick = () => {
    setOpenModal('login')
  }

  const handleRegisterClick = () => {
    setOpenModal('register')
  }

  const handleDialogDismiss = () => {
    setOpenModal('none')
  }

  const handleLoginSubmit = formData => {
    console.log('login', formData)
  }

  const handleRegisterSubmit = formData => {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <div>
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
      <div>
        <button type="button" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
      <Dialog
        aria-label="Login Form"
        isOpen={openModal === 'login'}
        onDismiss={handleDialogDismiss}
      >
        <button type="button" onClick={handleDialogDismiss}>
          Close
        </button>
        <h2>Login Form</h2>
        <LoginForm handleSubmit={handleLoginSubmit} buttonText="Login" />
      </Dialog>
      <Dialog
        aria-label="Register Form"
        isOpen={openModal === 'register'}
        onDismiss={handleDialogDismiss}
      >
        <h2>Register Form</h2>
        <LoginForm handleSubmit={handleRegisterSubmit} buttonText="Register" />
      </Dialog>
    </div>
  )
}

export const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
