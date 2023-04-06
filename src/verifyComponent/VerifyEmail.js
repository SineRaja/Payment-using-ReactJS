import './verifyEmail.css'
import {useAuthValue} from '../AuthContext'
import {useState, useEffect} from 'react'
import  {auth} from '../firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material'

function VerifyEmail() {

  const {currentUser} = useAuthValue()
  const [time, setTime] = useState(60)
  const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className='center'>
      <div className='verifyEmail'>
        <h1 className='login_header_style'>Verify your Email Address</h1>
        <p>
          <strong className='span_design'>A Verification email has been sent to:</strong><br/>
          <span className='mailIdDesign'>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>       
        <Button  variant="contained" color="error"
          onClick={resendEmailVerification}
          disabled={timeActive}
        >Resend Email {timeActive && time}</Button>
      </div>
    </div>
  )
}

export default VerifyEmail
