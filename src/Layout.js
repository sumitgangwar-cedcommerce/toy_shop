import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import HomeIcon from '@mui/icons-material/Home';
import './Layout.css'
import { data } from './DataContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Modal, Tooltip } from '@mui/material';
import Cart from './Cart';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';




const Layout = () => {
  const [open , setOpen] = useState(false)
  const [err , setErr] = useState('')
  
  const nav = useNavigate()

  const search_t = (e) =>{
    nav('/shop' , {state:{text:e}})
  }
  const u = useContext(data)

  window.onscroll = () =>{
    if(window.scrollY > 40){
      document.getElementById('to-top').style.display = 'flex';
    }
    else document.getElementById('to-top').style.display = 'none';
    
  }

  const login_fun = (event) =>{
    event.preventDefault();
    let email = event.target.email.value
    let password = event.target.password.value
    if(email=='abc@gmail.com' && password == '123456'){
      u.user[1]('ABC')
      u.lmodal[1](false)
    }
    else{
      setErr('*Invalid email or password')
    }
  }
  return (
    <div>
      <div className="navbar">
        <div className='logo'>
          <Link to='/' element={<Home />}>
            <img src='https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/logo.svg' alt='#' />
          </Link>
        </div>
        <div className='menu'>
          <Tooltip title='HOME' arrow><Link to='/' element={<Home />}><HomeIcon /></Link></Tooltip>
          <Tooltip title='SHOP' arrow><Link to='/shop' element={<Shop />}><StorefrontRoundedIcon /></Link></Tooltip>
          <p className='search'>
            <input type='search' placeholder='Search here' onChange = {(event) => search_t(event.target.value)} />
            <span className='icon'><SearchIcon /></span>
          </p>
          {
            u.user[0]==='ABC' ? <p className='login login-name'>Hello,<br />{u.user[0]}</p> :
            <p className='login' onClick={()=>u.lmodal[1](true)}><Tooltip title='LOGIN' arrow><AccountCircleIcon /></Tooltip></p>
          }
          <p className='counter' onClick={()=>nav('/cart')}><Tooltip title='CART' arrow><ShoppingBagIcon /></Tooltip><span className='counter1'>{u.cart[0].length}</span></p>
        </div>
        <Modal
          open={u.lmodal[0]}
          onClose={()=>u.lmodal[1](false)}
        >
          <div className ='modal-login modal-body'>
            <div className ='modal-title'>
              <h2>Login</h2>
            </div>
            <div className ='modal-content'>
              <div className='err'><p>{err}</p></div>
              <form className = 'login-form' onSubmit={(e)=>login_fun(e)}>
                <p>
                  <label for='email'>Email</label>
                  <input required  name='email' id='email'  pattern='abc@gmail.com' placeholder='abc@gmail.com' title='abc@gmail.com' />
                </p>
                <p>
                  <label for='password'>Password</label>
                  <input required id='password' name='password' pattern='123456' type='password' placeholder='123456' title='123456' />
                </p>
                <p>
                  <button onClick='#' type='submit='>SUBMIT</button>
                </p>
              </form>
            </div>
          </div>
        </Modal>
        <div className='to-top' id='to-top'>
          <Tooltip title='back to top'><i onClick={()=>{document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}}><KeyboardArrowUpIcon sx={{fontSize:'5vw'}} /></i></Tooltip>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout