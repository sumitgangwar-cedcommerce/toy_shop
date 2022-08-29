import React, { useContext, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Modal, Rating, Tooltip } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Footer from './Footer';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { RemoveRedEyeRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { data } from './DataContext'
import { products } from './Data'



const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#03befc',
    color: 'rgba(0, 0, 0 , 1)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));;



const Home = () => {

  const [view , setView] = useState(false)
  const [view_img , setView_img] = useState('')

  const view_fun = (data) =>{
    setView_img(data)
    setView(true)
  }

  const arr = {
    1: products.spinning[2],
    2: products.spinning[1],
    3: products.vehicle[2],
    4: products.teddy[1],
  }
  const u = useContext(data)
  const add_cart = (i) =>{
    arr[i]['quantity']=1
    if(u.cart[0].indexOf(arr[i])===-1) {
      u.cart[1]([...u.cart[0] , arr[i]])
    }
  }

  const nextfun = () =>{
    document.getElementById('trending-item-main').scrollLeft+=160;
  }
  const beforefun = () =>{
    document.getElementById('trending-item-main').scrollLeft-=160;
  }
  const nav = useNavigate()
  return (
    <div>
      <div className="banner">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          onChange={onchange}
          showStatus={false}
          showThumbs={false}
        >
          <div className="offers">
            <img src='https://cdn.shopify.com/s/files/1/0475/2385/6541/files/slider2-bg.jpg?v=1600947889' alt="#" />
            <p className='animate__animated animate__fadeInLeft'>
              Enjoy 10% off on your first order <br />
              <button className='animate__animated animate__heartBeat animate__infinite	infinite' onClick={()=>nav('/shop')}>Shop Now</button>
            </p>
          </div>
          <div>
          <div className="offers">
            <img alt='#' src='https://cdn.shopify.com/s/files/1/0475/2385/6541/files/slider3-bg.jpg?v=1600947910' />
            <p className='animate__animated animate__fadeInLeft'>
              Enjoy 10% off on your first order <br />
              <button className='animate__animated animate__heartBeat animate__infinite	infinite' onClick={()=>nav('/shop')}>Shop Now</button>
            </p>
          </div>
          </div>
          <div>
          <div className="offers">
            <img alt='#' src='https://cdn.shopify.com/s/files/1/0475/2385/6541/files/slide-1.jpg?v=1599119900' />
            <p className='animate__animated animate__fadeInLeft'>
              Enjoy 10% off on your first order <br />
              <button className='animate__animated animate__heartBeat animate__infinite	infinite' onClick={()=>nav('/shop')}>Shop Now</button>
            </p>
          </div>
          </div>
        </Carousel>
      </div>

      <div className="showCase">
        <div className='showCase-item'>
          <img src='https://htmldemo.net/kidol/kidol/assets/img/icons/f1.png' alt='#' />
          <h4>Free Shipping</h4>
          <p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
        </div>
        <div className='showCase-item'>
          <img src='https://htmldemo.net/kidol/kidol/assets/img/icons/f2.png' alt='#' />
          <h4>Support 24/7</h4>
          <p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
        </div>
        <div className='showCase-item'>
          <img src='https://htmldemo.net/kidol/kidol/assets/img/icons/f3.png' alt='#' />
          <h4>Money Return</h4>
          <p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
        </div>
      </div>

      <div className="trending">
        <div className="trending-head">
          <h2>Trending Product</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='trending-item-div'>
          <div className='icon'><button onClick={beforefun}><NavigateBeforeIcon /></button></div>
          <div className='trending-item-main' id="trending-item-main">
            <div className='trending-item'>
             
              <div><img src='https://htmldemo.net/kidol/kidol/assets/img/shop/11.png' alt='#' /></div>
              <div><Rating size="small" value={3} /></div>
              <div><p>Classic Fisher Gift</p></div>
              <div><p>₹470</p></div>
              <div className='icons-div animate__fadeInUp animate__animated'>
                <div className="view-icon1 animate__animated animate__flipInY">
                  <LightTooltip onClick={()=>view_fun('https://htmldemo.net/kidol/kidol/assets/img/shop/11.png')} title='view' placement="top"><RemoveRedEyeRounded /></LightTooltip >
                </div>
                <div className="cart-button1 animate__animated animate__flipInY">
                  <LightTooltip title='Add to cart' placement="top"><ShoppingBagIcon onClick={()=>add_cart(1)} /></LightTooltip>
                </div>
              </div>
            </div>
            <div className='trending-item'>
             
              <div><img src='https://htmldemo.net/kidol/kidol/assets/img/shop/10.png' alt='#' /></div>
              <div><Rating size="small" value={3} /></div>
              <div><p>Newborn Kit Set</p></div>
              <div><p>₹349</p></div>
              <div className='icons-div animate__fadeInUp animate__animated'>
                <div className="view-icon1 animate__animated animate__flipInY">
                  <LightTooltip onClick={()=>view_fun('https://htmldemo.net/kidol/kidol/assets/img/shop/10.png')} title='view' placement="top"><RemoveRedEyeRounded /></LightTooltip >
                </div>
                <div className="cart-button1 animate__animated animate__flipInY">
                  <LightTooltip title='Add to cart' placement="top"><ShoppingBagIcon onClick={()=>add_cart(2)} /></LightTooltip>
                </div>
              </div>
              
            </div>
            <div className='trending-item'>
             
              <div><img src='https://htmldemo.net/kidol/kidol/assets/img/shop/12.png'  alt='#' /></div>
              <div><Rating size="small" value={3} /></div>
              <div><p>Sassy Crib and Floor Mirror</p></div>
              <div><p>₹350</p></div>
              <div className='icons-div animate__fadeInUp animate__animated'>
                <div className="view-icon1 animate__animated animate__flipInY">
                  <LightTooltip onClick={()=>view_fun('https://htmldemo.net/kidol/kidol/assets/img/shop/12.png')} title='view' placement="top"><RemoveRedEyeRounded /></LightTooltip >
                </div>
                <div className="cart-button1 animate__animated animate__flipInY">
                  <LightTooltip title='Add to cart' placement="top"><ShoppingBagIcon onClick={()=>add_cart(3)}/></LightTooltip>
                </div>
              </div>
              
            </div>
            <div className='trending-item'>
             
              <div><img src='https://htmldemo.net/kidol/kidol/assets/img/shop/9.png' alt='#' /></div>
              <div><Rating size="small" value={3} /></div>
              <div><p>Funskool Teddy Brown</p></div>
              <div><p>₹870</p></div>
              <div className='icons-div animate__fadeInUp animate__animated'>
                <div className="view-icon1 animate__animated animate__flipInY">
                  <LightTooltip onClick={()=>view_fun('https://htmldemo.net/kidol/kidol/assets/img/shop/9.png')} title='view' placement="top"><RemoveRedEyeRounded /></LightTooltip >
                </div>
                <div className="cart-button1 animate__animated animate__flipInY">
                  <LightTooltip title='Add to cart' placement="top"><ShoppingBagIcon onClick={()=>add_cart(4)}/></LightTooltip>
                </div>
              </div>
              
            </div>
            <div className='trending-item'>
             
              <div><img src='https://htmldemo.net/kidol/kidol/assets/img/shop/11.png' alt='#' /></div>
              <div><Rating size="small" value={3} /></div>
              <div><p>Classic Fisher Gift</p></div>
              <div><p>₹470</p></div>
              <div className='icons-div animate__fadeInUp animate__animated'>
                <div className="view-icon1 animate__animated animate__flipInY">
                  <LightTooltip onClick={()=>view_fun('https://htmldemo.net/kidol/kidol/assets/img/shop/11.png')} title='view' placement="top"><RemoveRedEyeRounded /></LightTooltip >
                </div>
                <div className="cart-button1 animate__animated animate__flipInY">
                  <LightTooltip title='Add to cart' placement="top"><ShoppingBagIcon onClick={()=>add_cart(1)}/></LightTooltip>
                </div>
              </div>
              
            </div>
            <div className='trending-item'>
             
              <div><img src='https://htmldemo.net/kidol/kidol/assets/img/shop/10.png' alt='#' /></div>
              <div><Rating size="small" value={3} /></div>
              <div><p>Newborn Kit Set</p></div>
              <div><p>₹349</p></div>
              <div className='icons-div animate__fadeInUp animate__animated'>
                <div className="view-icon1 animate__animated animate__flipInY">
                  <LightTooltip onClick={()=>view_fun('https://htmldemo.net/kidol/kidol/assets/img/shop/10.png')} title='view' placement="top"><RemoveRedEyeRounded /></LightTooltip >
                </div>
                <div className="cart-button1 animate__animated animate__flipInY">
                  <LightTooltip title='Add to cart' placement="top"><ShoppingBagIcon onClick={()=>add_cart(2)}/></LightTooltip>
                </div>
              </div>
              
            </div>
            <div className='trending-item'>
             
              <div><img src='https://htmldemo.net/kidol/kidol/assets/img/shop/12.png' alt='#' /></div>
              <div><Rating size="small" value={3} /></div>
              <div><p>Sassy Crib and Floor Mirror</p></div>
              <div><p>₹350</p></div>
              <div className='icons-div animate__fadeInUp animate__animated'>
                <div className="view-icon1 animate__animated animate__flipInY">
                  <LightTooltip onClick={()=>view_fun('https://htmldemo.net/kidol/kidol/assets/img/shop/12.png')} title='view' placement="top"><RemoveRedEyeRounded /></LightTooltip >
                </div>
                <div className="cart-button1 animate__animated animate__flipInY">
                  <LightTooltip title='Add to cart' placement="top"><ShoppingBagIcon onClick={()=>add_cart(3)}/></LightTooltip>
                </div>
              </div>
              
            </div>
            <div className='trending-item'>
             
              <div><img src='https://htmldemo.net/kidol/kidol/assets/img/shop/9.png' alt='#' /></div>
              <div><Rating size="small" value={3} /></div>
              <div><p>Funskool Teddy Brown</p></div>
              <div><p>₹870</p></div>
              <div className='icons-div animate__fadeInUp animate__animated'>
                <div className="view-icon1 animate__animated animate__flipInY">
                  <LightTooltip onClick={()=>view_fun('https://htmldemo.net/kidol/kidol/assets/img/shop/9.png')} title='view' placement="top"><RemoveRedEyeRounded /></LightTooltip >
                </div>
                <div className="cart-button1 animate__animated animate__flipInY">
                  <LightTooltip title='Add to cart' placement="top"><ShoppingBagIcon /></LightTooltip>
                </div>
              </div>
            </div>
            <div className='trending-item view-more'>
              <button onClick={() => nav('/shop')}>View More</button>
            </div>
          </div>
          <div className='icon'><button onClick={nextfun}><NavigateNextIcon /></button></div>
        </div>
      </div>


      <div className='testimonial'>
        <div className='testimonial-head'>
          <h2>Testimonail</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='testimonial-main'>
          <div className='testimonail-item'>
            <p className='review'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
            <div className='customer'>
              <img src='https://htmldemo.net/kidol/kidol/assets/img/testimonial/2.png' alt="#" />
              <p>
                Dasia Lovell <br />
                Customer
              </p>
            </div>
          </div>
          <div className='testimonail-item'>
            <p className='review'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
            <div className='customer'>
              <img src='https://htmldemo.net/kidol/kidol/assets/img/testimonial/1.png' alt="#" />
              <p>
                Dasia Lovell <br />
                Customer
              </p>
            </div>
          </div>
          <div className='testimonail-item'>
            <p className='review'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
            <div className='customer'>
              <img src='https://htmldemo.net/kidol/kidol/assets/img/testimonial/3.png' alt="#" />
              <p>
                Dasia Lovell <br />
                Customer
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open = {view}
        onClose = {()=>{setView(false)}}
      >
        <div className='modal-body view-image-modal'>
          <p className='view-img'>
            <img src={view_img} alt ='#' />
          </p>
        </div>
      </Modal>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home