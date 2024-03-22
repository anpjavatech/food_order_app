import { useContext } from "react";

import {CartContext} from "../store/CartContext";
import image from "../assets/logo.jpg"
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Header(){

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalNumberOfItems = cartCtx.items.reduce((totalNumOfItems, item)=>{
        return totalNumOfItems + item.quantity
    }, 0);

    function handleShowCart(){
        userProgressCtx.showModal();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={image} alt="App Image" />
                <h1 id="title">REACTFOOD</h1>
            </div>
            <nav>
                <Button textOnly type="button" onClick={handleShowCart}>Cart ({totalNumberOfItems})</Button>
            </nav>
        </header>
    );
}