import { combineReducers } from 'redux';
import AddToCartReducers from './AddToCart/AddToCartReducers';
import addToFavouriteReducres from './AddtoFavourite/FavouriteProductReducer';

export const appReducer = combineReducers({
    addToFavouriteReducres:addToFavouriteReducres,
    AddToCartReducers:AddToCartReducers
});

export const rootReducers = (state, action) => {
  return appReducer(state, action);
}
