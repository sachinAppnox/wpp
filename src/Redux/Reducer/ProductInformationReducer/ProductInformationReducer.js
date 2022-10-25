const initialData={
    data:{
    }
}

const ProductInformationReducer=((state=initialData,action)=>{
    switch(action.type){
        case 'Product_Information':
            state.data = action.payload;
            return { ...state };
        default: 
        return {...state}
    }
})

export default ProductInformationReducer