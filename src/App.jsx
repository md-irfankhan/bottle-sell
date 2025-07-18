import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import { addLS, getLS, removeLS } from './js/func';
import Carts from './components/Carts/Carts';



function App() {
  const [bottles,setBottles]=useState([]);
   useEffect(()=>{
    fetch('api.json').then(res=>res.json()).
    then(data=>setBottles(data))
   },[])

  const [cart,setCart]=useState([]);
  const handleAddCart=(id)=>{
      
      
      addLS(id.bottle_id);
      setCart([id,...cart]);
      console.log(cart)
      
  }
  const handleRemoveCart=(id)=>{
      
      console.log(cart);
      
      const filtered=cart.filter(idx=>idx.bottle_id!=id.bottle_id);
      // addLS(...filtered)
      setCart(filtered)
      // console.log(filtered)
      removeLS(id.bottle_id);
      
      
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
  const [tab,setTab]=useState(true);
  
  return (
    <>
      
      <div style={{display:'flex',gap:'5px',justifyContent:'center',marginBottom:'10px'}}>
        
        <button className={tab&&'active'}  onClick={()=>setTab(true)}>Home</button>
        <button className={tab||'active'}  onClick={()=>setTab(false)}>Cart</button>
      </div>

      <div className='all-cards'>
        
        {
         tab && bottles.map(bottle=><Cards key={bottle.bottle_id} handleAddCart={handleAddCart} bottle={bottle}></Cards>)
        }

        {
          (tab==false) ? cart.map(bottle=>(<Carts  handleRemoveCart={handleRemoveCart} bottle={bottle}></Carts>) ):""
        }
      </div>
      
      
    </>
  )
}

export default App;
