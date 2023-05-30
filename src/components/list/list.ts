import { addObserver, appState } from "../../store";


class MyList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }
    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML="";

        appState.products.forEach((p) =>{
            const ProdCont = this.ownerDocument.createElement('article');
            const ProdTitle = this.ownerDocument.createElement('h2');
            ProdTitle.textContent = p.name;

            const ProPrice = this.ownerDocument.createElement('h2');
            ProPrice.textContent = p.price;

            ProdCont?.appendChild(ProdTitle);
            ProdCont?.appendChild(ProPrice);
            this.shadowRoot?.appendChild(ProdCont);
        })
    }
}

customElements.define('products-list', MyList)
export default MyList;