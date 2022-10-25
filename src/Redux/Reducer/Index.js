import { combineReducers } from 'redux';
import AddToCartReducers from './AddToCart/AddToCartReducers';
import addToFavouriteReducres from './AddtoFavourite/FavouriteProductReducer';
import ProductInformationReducer from './ProductInformationReducer/ProductInformationReducer';

export const appReducer = combineReducers({
    addToFavouriteReducres:addToFavouriteReducres,
    AddToCartReducers:AddToCartReducers,
    ProductInformationReducer:ProductInformationReducer
});

export const rootReducers = (state, action) => {
  return appReducer(state, action);
}
