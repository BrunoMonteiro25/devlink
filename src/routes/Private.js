import { useState, useEffect } from 'react'

import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'

import { Navigate } from 'react-router-dom'

export default function Private({ children }) {
  const [loading, setLoading] = useState(true)
  const [signed, setSigned] = useState(false)
  // se tem um usuário logado o signed fica como true

  useEffect(() => {
    async function checkLogin() {
      const unsub = onAuthStateChanged(auth, (user) => {
        // se tem usuário logado
        if (user) {
          const userData = {
            uid: user.uid,
            email: user.email,
          }
          localStorage.setItem('@datailUser', JSON.stringify(userData))
          setLoading(false)
          setSigned(true)
        } else {
          setLoading(false)
          setSigned(false)
        }
      })
    }
    checkLogin()
  }, [])

  if (loading) {
    return <div></div>
  }

  if (signed === false) {
    return <Navigate to="/login" />
  }

  return children
}
