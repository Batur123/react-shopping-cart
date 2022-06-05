import axios from 'axios';
import React from "react";

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: null,
            cart: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addToCart(e) {
        if (this.state.cart.length >= 50) {
            console.log("Maksimum 50 ürün eklenebilir.");
            return;
        }

        this.setState({
            cart: this.state.cart.concat({
                productId: e.target.elements.orderNumber.value,
                addCartDate: Date.now()
            })
        })

        // alert("Ürünü sepete başarıyla eklediniz - " + e.target.elements.productName.value);
    }

    componentDidUpdate() {
        if (this.state.cart.length !== 0 && localStorage.getItem('shoppingCart') === null) {
            localStorage.setItem('shoppingCart', JSON.stringify(this.state.cart));
        }

        console.log(localStorage.getItem('shoppingCart'));
    }

    componentDidMount() {


        axios.get('/getAllProducts').then(response => {
            this.setState({products: response.data});
        });
    }

    handleSubmit(e) {
        this.addToCart(e);
        e.preventDefault();
    }

    render() {
        if (this.state.products !== null) {
            return (
                <div id="content">
                    {this.state.products.map((result,index) => (
                        <div id={result.product_id}>
                            <ul>
                                <li key={index}>İsim: {result.product_name}</li>
                                <li key={index+"-"}>Fiyat: {result.price}</li>
                                <form onSubmit={this.handleSubmit}>
                                    <input
                                        type="hidden"
                                        id="orderNumber"
                                        value={result.product_id}
                                    />
                                    <input
                                        type="hidden"
                                        id="productName"
                                        value={result.product_name}
                                    />
                                    <button>Sepete Ekle</button>
                                </form>
                            </ul>
                            <hr/>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

/*

 */
export default Products;