const getLS=()=>{
    const data=localStorage.getItem('cart');
    if(data){
        return JSON.parse(data);
    }
    return [];
}

const saveLS=(data)=>{
    const cart=JSON.stringify(data);
    localStorage.setItem('cart',cart);
}

const addLS=(id)=>{
    const cart=getLS();
    cart.push(id);
    saveLS(cart);
    // console.log(cart)
}
const removeLS=(id)=>{
    const cart =getLS();
    const remaining=cart.filter(idx=>idx!=id)
    saveLS(remaining);
}
export {addLS,getLS,removeLS};
