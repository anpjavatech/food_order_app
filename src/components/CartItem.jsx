import { currencyFormatter } from "../utils/formatting";

export default function CartItem({name, price, quantity, onIncrement, onDecrement}){

    return <li className="cart-item">
        <p> {name} - {quantity} * {currencyFormatter.format(price) }</p>
        <p className="cart-item-actions">
            <button onClick={onIncrement}>+</button>
            <span>{quantity}</span>
            <button onClick={onDecrement}>-</button>
        </p>
    </li>
}