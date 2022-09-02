import React, { useContext, useEffect, useState } from 'react'
import './Shop.css'
import { products } from './Data'
import { Modal, Rating, Tooltip } from '@mui/material'
import Footer from './Footer'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { RemoveRedEyeRounded } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import { useLocation } from 'react-router-dom'
import { data } from './DataContext';



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









const Shop = () => {

  const [view , setView] = useState(false)
  const [view_img , setView_img] = useState('')

  const view_fun = (data) =>{
    setView_img(data)
    setView(true)
  }

  const [cat , setCat] = useState('all');
  const [sort , setSort] = useState(0);
  const [displayPro , setDisplayPro] = useState([])
  const [text, setText] = useState('');


  const pageUrl = useLocation();
 


  useEffect(()=>{
    if( pageUrl.state!==null && pageUrl.state.text!==undefined) setText(pageUrl.state.text)

  },[pageUrl.state])

  useEffect(()=>{
    productChange();
  },[cat , sort , text])

  const productChange = () =>
    {
      let temp = [];
      Object.keys(products).map(product =>{
        if(cat==='all' || product === cat){
          products[product].map((item , i)=>{
            if(item['name'].toLowerCase().includes(text.toLowerCase()) || text==='' || product.toLowerCase().includes(text.toLowerCase())){
              temp.push(item)
            }
          })
        }
      })

      temp = temp.sort((a, b) => {
        return Number(a.price) - Number(b.price) 
      })
      if(Number(sort)===1){
        temp = temp.reverse()
      }   
      setDisplayPro([...temp])
    }
  const u = useContext(data)
  const add_to_cart = (item) =>{
    item['quantity']=1
    if(u.cart[0].indexOf(item)===-1) {
      u.cart[1]([...u.cart[0] , item])
    }
  }

  const errMsg = () =>{
    return(
    <div className='errP'>
      <p>No data found!!</p>
    </div>)
  }

  return (
    <div>
      <div className="p-navbar">
          <p>
            SELECT CATEGORY
            <select id='category' onChange = {(event)=>setCat(event.target.value)}> 
              <option value='all'>All</option>
              <option value='teddy'>Teddy bear</option>
              <option value='vehicle'>Toy Vehical</option>
              <option value='spinning'>Spinning Toys</option>
              <option value='puzzle'>Puzzles</option>
              <option value='electronic'>Electronics</option>
            </select>
          </p>
          <p>
            Sort
            <select onChange = {(event)=>setSort(event.target.value)}>
              <option value={0}>Price low to high</option>
              <option value={1}>Price high to low</option>
            </select>
          </p>
      </div>
      <div className="p-list">
        {
          displayPro.length === 0 ? errMsg() :
            displayPro.map((item , i) => 
              <div className="p-list-item" key={i}>
                <div className='p-image'>
                  <img src={item.image} alt='#' />
                </div>
                
                <div className="p-content">
                  <Rating size="small" value={3.5} readOnly ></Rating>
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                </div>
                <div onClick={()=>add_to_cart(item)} className="cart-button animate__animated animate__flipInY">
                  <ShoppingBagIcon />
                </div>
                <div className="view-icon animate__animated animate__flipInY">
                  <LightTooltip onClick={()=>view_fun(item.image)} title='view' placement="left"><RemoveRedEyeRounded /></LightTooltip >
                </div>
              </div>
            )
        }
        
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
      <Footer />
    </div>
  )
}

export default Shop