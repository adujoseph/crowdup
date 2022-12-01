import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ connect, handleConnect, logout }) => {
  return (
    <header className="flex items-center p-4 shadow-md h-[100px] w-full px-10">
      <Link to="/">
        <div>
          <img
            src={require('../assets/images/logo.png')}
            className="object-contain w-40 h-40 rounded-full"
            alt="logo"
          />
        </div>
      </Link>
      <div className="flex items-center ml-auto space-x-4 text-xl font-bold capitalize cursor-pointer">
        {connect ? (
          <>
            <Link to="/account">
              <p className="">accounts</p>
            </Link>

            <Link to="/request">
              <p>make request</p>
            </Link>
            <button
              onClick={logout}
              className="p-2 text-sm text-white bg-red-500 rounded w-max"
            >
              logout
            </button>
          </>
        ) : (
          <button
            onClick={handleConnect}
            className="p-2 text-sm text-white bg-blue-500 rounded w-max"
          >
            connect
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
