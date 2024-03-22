import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart(){

    const cartCtx = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);
    const total = cartCtx.items.reduce((totalPrice, item) => totalPrice + (item.price*item.quantity), 0);

    function handleCloseModal(){
        userProgressContext.hideModal();
    }

    function handleOnIncrement(item){
        cartCtx.addItem(item);
    }

    function handleOnDecrement(id){
        cartCtx.removeItem(id);
    }

    function handleCheckoutButtonClick(){
        userProgressContext.showCheckout();
    }

    function handleClose(){
        userProgressContext.hideModal();
    }

    return(
        <Modal 
            className="cart" 
            open={userProgressContext.progress === "cart"} 
            onClose={userProgressContext.progress === "cart" ? handleClose: null}
        >

            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => 
                    <CartItem 
                        key={item.id} 
                        {...item} 
                        onIncrement={() => handleOnIncrement(item)} 
                        onDecrement={() => handleOnDecrement(item.id)}
                    />
                )}
            </ul>
            <p className="cart-total">Total Price = {currencyFormatter.format(total)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseModal}>
                    Close
                </Button>
                {cartCtx.items.length > 0 && 
                <Button onClick={handleCheckoutButtonClick}>
                    Submit To Checkout
                </Button>}
            </p>
        </Modal>
    );
}