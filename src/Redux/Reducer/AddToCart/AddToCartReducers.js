const initialData={
    cartItem:[]
}

const AddToCartReducers=((state=initialData,action)=>{
    console.log(action.payload,'s;dkf;dslkf')
    switch(action.type){
        case 'Add_To_Cart':
            state.cartItem.push(action.payload)
            return {...state}

        default: 
        return {...state}
    }
})

export default AddToCartReducers