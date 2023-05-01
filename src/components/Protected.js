import React, { useEffect } from 'react'
import {
    useNavigate
  } from "react-router-dom";

function Protected(props) {
    const {PropComponent} = props
    const navigate = useNavigate()
    useEffect(() => {
      let login = JSON.parse(localStorage.getItem('login'))
      if(!login){
        navigate('/')
      }else if(Date.now() > login.expiration){
        console.log('Inside else if')
        localStorage.removeItem('login');
      }
    })
  return (
    <div><PropComponent></PropComponent></div>
  )
}

export default Protected