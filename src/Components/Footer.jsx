import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex flex-column justify-content-center align-items-center bg-primary text-light'>
    <div className="footer-div d-flex justify-content-evenly w-100 flex-warp">
    <div className="website" style={{width:'400px'}}>
        <h4> <i class="fa-solid fa-truck-fast me-2"></i>E Cart</h4>
    <h6>
      Bootstrap
Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
<h6>Code licensed MIT, docs CC BY 3.0.</h6>
<h6>Currently v5.3.2</h6>

    </h6>
    </div>
    <div  className="link d-flex flex-column ">
      <h4>Links</h4>
     <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
     <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
     <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
   
    </div>
    
   
    <div className="guides d-flex flex-column ">
    <h4>Guides</h4>
     <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
     <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Bootstrap</Link>
     <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
    </div>
    <div className="contact d-flex flex-column flex-wrap">
      <h4>Contact Us</h4>
      <div className="sub d-flex">
        <input type="text" className='form-control' placeholder='Enter your Email Id' />
        <div  className='btn btn-primary ms-3'><i class="fa-sharp fa-solid fa-arrow-right fa-beat"></i></div>
      </div>
      <div className="icons fs-4 d-flex justify-content-between mt-3">
      <Link to={'https://getbootstrap.com/'} style={{TextDecoder:'none',color:'black'}}><i className="fa-solid fa-envelope"></i></Link>
     <Link to={'/home'} style={{TextDecoder:'none',color:'black'}}><i className="fa-brands fa-facebook"></i></Link>
     <Link to={'/watch-history'} style={{TextDecoder:'none',color:'black'}}><i className="fa-brands fa-twitter"></i></Link>
     <Link to={'/watch-history'} style={{TextDecoder:'none',color:'black'}}><i className="fa-solid fa-phone"></i>      </Link>
     <Link to={'/watch-history'} style={{TextDecoder:'none',color:'black'}}><i className="fa-brands fa-instagram"></i>  </Link>
     <Link to={'/watch-history'} style={{TextDecoder:'none',color:'black'}}> <i className="fa-brands fa-linkedin"></i>  </Link>
      </div>
    </div>

    </div>
    <p>Copyright © 2023 React E Cart. Built with React</p>
  </div>
  )
}

export default Footer