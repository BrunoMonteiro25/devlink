import React from 'react'
import './login.css'
import { Logo } from '../../components/Logo'

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    if (email === '' || password === '') {
      alert('prencha todos os campos')
      return
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Logado com sucesso!', { theme: 'dark' })
        navigate('/admin', { replace: true })
      })
      .catch(() => {
        toast.error('Usuário ou senha inválidos.', { theme: 'dark' })
        console.log('Erro ao fazer login')
      })
  }

  return (
    <div className="login-container">
      <Logo />

      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="******"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Acessar</button>
      </form>
    </div>
  )
}
