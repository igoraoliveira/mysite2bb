import { getAuth, signInWithEmailAndPassword, signOut }
    from 'firebase/auth'
import { app } from './FirebaseConfig'
import { useReducer } from 'react'

const auth = getAuth(app)

export async function login(email, senha) {
    return await signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => userCredential.user.uid)
        .catch((error) => {
            if (error.code == 'auth/wrong-password') {
                throw Error('Senha invalida')
            } else if (error.code == 'auth/user-not-found') {
                throw Error('Usuário não encontrado')
            }
        })
}
export async function logout() {
    await signOut(auth)
}