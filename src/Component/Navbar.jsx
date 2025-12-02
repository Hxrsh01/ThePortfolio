import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav style={{h:"100px",w:"100%",backgroundColor:"black"}}>
        <h1 style={{color:"white",marginLeft:"20px"}}>HG.</h1>
        <div>
          <ul style={{display:"flex",listStyleType:"none",color:"white",gap:"20px",marginLeft:"20px"}}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
