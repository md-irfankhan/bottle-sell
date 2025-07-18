import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import { addLS, getLS } from './js/func';



function App() {
  const [bottles,setBottles]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:5500/api.json').then(res=>res.json()).
    then(data=>setBottles(data))
   },[])

  const [cart,setCart]=useState([]);
  const handleAddCart=(id)=>{
      
      
      addLS(id.bottle_id);
      setCart([id,...cart]);
      console.log(cart)
      
  }
  useEffect(()=>{
    const ids=getLS()
    const savedCart=[];
    for(const id of ids){
      const data=bottles.find(idx=>idx.bottle_id==id);
      savedCart.push(data)
      
      
    }
    setCart(savedCart);
    
    
  },[bottles])
  
  return (
    <>
      
      <div style={{display:'flex',gap:'5px',justifyContent:'center',marginBottom:'10px'}}>
        <button>Home</button>
        <button>Cart</button>
      </div>

      <div className='all-cards'>
        {
          bottles.map(bottle=><Cards key={bottle.bottle_id} handleAddCart={handleAddCart} bottle={bottle}></Cards>)
        }
      </div>
      
      
    </>
  )
}

export default App
