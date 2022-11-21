import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/app-redux'
import { postLoginData } from '../store/feature/login/login'
export default function Login() {
  const a = useAppSelector((state) => state.login)
  const dispatch = useAppDispatch()
  dispatch(postLoginData())
  return <div>我是</div>
}
// Login.getLayout = function getLayout(login: ReactElement) {
//   console.log(login)
//   return <div>111wsss {login}</div>
// }
