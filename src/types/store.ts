//aqui ponete el import

import { OneProduct } from "./product";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: OneProduct[];
};

export enum SomeActions {
  "GET_PRODUCT" = "GET_PRODUCT",
  "SAVE_PRODUCT" = "SAVE_PRODUCT",
  
}

export interface GetMyProducts {
  action: SomeActions.GET_PRODUCT;
  payload: OneProduct[];
}

export interface SaveMyProducts {
  action: SomeActions.SAVE_PRODUCT;
  payload: OneProduct;
}

export type Actions = GetMyProducts | SaveMyProducts;
