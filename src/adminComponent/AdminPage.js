import './admin.css'
import {useAuthValue} from '../AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../firebase'


function AdminPage() {
  const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Admin Page</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
      </div>
  )
}

export default AdminPage
