import firebaseConfig from "../firebaseConfig"
import { OneProduct } from "../types/product"
import {Actions, SomeActions} from "../types/store"


export const getMyProducts = async (): Promise<Actions> =>{
    const products = await firebase.getMyProductsFromDB();
        return {
            action: SomeActions.GET_PRODUCT,
            payload: products,
        };
};

export const saveMyProduct = async (product: OneProduct): Promise<Actions> =>{
    await firebase.saveMyProductInDB(product);
        return {
            action: SomeActions.SAVE_PRODUCT,
            payload: product,
        };
};

