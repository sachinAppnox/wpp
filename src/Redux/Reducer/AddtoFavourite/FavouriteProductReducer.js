const initialData={
    data:[]
}

const addToFavouriteReducres=((state=initialData,action)=>{
    switch(action.type){
        case 'Add_To_Favourite':
            state.data.push(action.payload)
            return {...state}

        default: 
        return {...state}
    }
})

export default addToFavouriteReducres