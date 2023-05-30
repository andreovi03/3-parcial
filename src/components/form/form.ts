import { dispatch } from "../../store";
import { saveMyProduct } from "../../store/actions";
import { OneProduct } from "../../types/product";

const userInputs: OneProduct = {
    name: "",
    price: "0",
}


class MyForm extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const Pname = this.ownerDocument.createElement('label');
        Pname.textContent = "Insert product name";

        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change", (e: any) =>{
            userInputs.name = e.target.value;
        })

        const Pprice = this.ownerDocument.createElement('label');
        Pprice.textContent = "Insert product price";

        const price = this.ownerDocument.createElement('input');
        price.addEventListener("change", (e: any) =>{
            userInputs.price = e.target.value;
        })

        const savebtn = this.ownerDocument.createElement("button");
        savebtn.textContent="Done";

        savebtn.addEventListener("click" , async()=>{
            console.log(userInputs);
            dispatch(await saveMyProduct(userInputs))
        })



        
        this.shadowRoot?.appendChild(Pname);
        this.shadowRoot?.appendChild(name);

        this.shadowRoot?.appendChild(Pprice);
        this.shadowRoot?.appendChild(price);

        this.shadowRoot?.appendChild(savebtn);
    }
}

customElements.define("app-form", MyForm);
export default MyForm;