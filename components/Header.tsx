import React from 'react'
import Link from 'next/link'

//npm run dev to start app
//cd sanityyoutube, sanity start
function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            // src="https://links.papareact.com/yvf"
            src="../legendsblack.png"
            alt=""
          />
        </Link>
        <div className="item-center hidden space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact an Admin</h3>
          <h3 className="rounded-full bg-green-600 px-4 text-white">
            Make a Post
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="rounded-full border border-green-600 px-4">Log Out</h3>
      </div>
    </header>
  )
}

export default Header
