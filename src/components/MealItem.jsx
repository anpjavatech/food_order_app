import { currencyFormatter } from "../utils/formatting.js"
import Button from "./UI/Button.jsx";
import { CartContext } from "../store/CartContext.jsx";
import { useContext } from "react";

export default function MealItem({meal}){

    const cartCtx = useContext(CartContext);
    function handleAddItemToCart(item){
        cartCtx.addItem(meal);
    }
    return (
        <li className="meal-item">
            <article>
                <div>
                    <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button type="button" onClick={handleAddItemToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}