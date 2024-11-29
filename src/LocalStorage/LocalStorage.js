const getStoredCart = ()=>{
    const getCart = localStorage.getItem('cart')
    if(getCart){
        return JSON.parse(getCart)
    }
    return []
}

const saveToLocalStrCart = (id)=>{
    const cart = getStoredCart()
    cart.push(id)
    const convertStringify = JSON.stringify(cart)
    localStorage.setItem('cart', convertStringify)
}

//Wishlist functionalities
const getStoredWishList = ()=>{
    const getWishList = localStorage.getItem('wishList')
    if(getWishList){
        return JSON.parse(getWishList)
    }
    return []
}

const saveToLocalStrWishList = (id)=>{
    const wishList = getStoredWishList()
    wishList.push(id)
    const convertStringify = JSON.stringify(wishList)
    localStorage.setItem('wishList', convertStringify)
}

export {saveToLocalStrCart,getStoredCart,saveToLocalStrWishList,getStoredWishList}