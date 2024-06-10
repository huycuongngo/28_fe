import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getLoggedInUser } from '../redux/auth/authSlice'

function Layout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(getLoggedInUser)

  const handleLogout = () => {
    
  }

  return (
    <div>
      <header style={{
        backgroundColor: '#6366F1',
        padding: '30px 20px'
      }}>
        <Link style={{
          color: 'white'
        }}
          title='Home'
          to={ 
            user?.email ? "/" : "/login"
          }
          className='fa-solid fa-house'
        />

        {
          user?.email ? (<div>
            {
              user?.role === "admin" &&
              <Link
                style={{
                  color: 'white',
                  cursor: 'pointer'
                }}
                title='Edit movie'
                to='/admin' className='fa-solid fa-pen-to-square'
              />
            }
            <button style={{
              cursor: 'pointer'
            }} title='logout' className='fa-solid fa-right-from-bracket' />
          </div>) : (<></>)
        }
      </header>
    </div>
  )
}

export default Layout