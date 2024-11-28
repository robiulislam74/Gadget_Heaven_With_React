const getStoredCart = ()=>{
    const getCart = localStorage.getItem('cart')
    if(getCart){
        return JSON.parse(getCart)
    }
    return []
}

const saveToLocalStr = (id)=>{
    const cart = getStoredCart()
    cart.push(id)
    const convertStringify = JSON.stringify(cart)
    localStorage.setItem('cart', convertStringify)
}

export {saveToLocalStr,getStoredCart}