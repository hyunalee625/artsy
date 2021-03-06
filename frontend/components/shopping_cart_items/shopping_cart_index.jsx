import React from 'react';
import { withRouter } from 'react-router-dom';
import ShoppingCartIndexItem from './shopping_cart_index_item';

class ShoppingCartIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllShoppingCartItems(this.props.user_id);
        document.body.style = 'background: #FAF9F5';
    }

    componentWillUnmount() {
        document.body.style = 'background: #FFFFFF';
    }
    
    totalQty(){
        return this.props.items.length; 
    }

    totalAmount(){
        let sum = 0;
        for(let i = 0; i < this.props.items.length; i++){
            let item = this.props.items[i];
            sum += (parseFloat(item.quantity) * parseFloat(item.price))
        }
        return sum.toFixed(2)
    }

    render(){
        return(
            <div className='cart-index'>
                <h1>{this.totalQty()} items in your cart</h1>
                <div className='cart-container'>
                    <div className='left-col right-border'>
                        <ul>
                            {this.props.items.map((item) => (
                                <ShoppingCartIndexItem deleteProduct={this.props.deleteShoppingCartItem} updateShoppingCartItem={this.props.updateShoppingCartItem} item={item} key={item.id} />
                            )
                            )}
                        </ul>
                        
                    </div>
                    <div className='right-col'>
                        <div>
                            <h2>How you'll pay</h2>
                            <label className='credit-card'>
                                <input type='radio' name='payment' value='visa' defaultChecked />
                                <div className='credit-card-img'>
                                    <img src="https://image.flaticon.com/icons/svg/196/196578.svg" />
                                    <img src='https://image.flaticon.com/icons/svg/196/196561.svg' />
                                    <img src='https://image.flaticon.com/icons/svg/349/349228.svg' />
                                    <img src='https://image.flaticon.com/icons/svg/217/217426.svg' />
                                </div>
                            </label>

                            <label className='credit-card'>
                                <input type='radio' name='payment' value='paypal' />
                                <div className='paypal-icon'>
                                    <img src="https://image.flaticon.com/icons/svg/888/888870.svg"/>
                                </div>
                            </label>
                        </div>

                        <div className='item-total'>
                            <span>Item(s) total</span><span>${this.totalAmount()}</span>
                        </div>
                        <div className='shipping'>
                            <span>Shipping</span><span>Free</span>
                        </div>

                        <div className='subtotal'>
                            <span>Subtotal</span><span>${this.totalAmount()}</span>
                            
                        </div>
            

                        <button>Proceed to checkout</button>
                    </div>     
                </div>
                
            </div>
        )
    }

}

export default ShoppingCartIndex; 