import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);

import firebaseConfig from "../firebaseConfig";
import { OneProduct } from "../types/product";

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { saveMyProduct } from "../store/actions";



const db = getFirestore(app);

const saveMyProductInDB = async (product: OneProduct) =>{
    try {
        await addDoc(collection(db, "products"), product);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
};

const getMyProductsFromDB = async (): Promise<OneProduct[]> =>{
    const resp: OneProduct[] =[];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc: any) => {
      console.log(`${doc.id} => ${doc.data()}`);
      resp.push({
        ...doc.data(),
      }as OneProduct)
    });
    return resp;
  };




export default { saveMyProductInDB, getMyProductsFromDB };