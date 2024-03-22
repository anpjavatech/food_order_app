import { createContext, useState } from "react";

export const UserProgressContext = createContext({
    progress:"",
    showModal:()=>{},
    hideModal:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{}
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState("");

    function showModal(){
        setUserProgress("cart");
    }

    function hideModal(){
        setUserProgress("");
    }

    function showCheckout(){
        setUserProgress("checkout");
    }

    function hideCheckout(){
        setUserProgress("");
    }

    const userProgressCtx = {
        progress:userProgress,
        showModal,
        hideModal,
        showCheckout,
        hideCheckout
    }

    return <UserProgressContext.Provider value={userProgressCtx}>
        {children}
    </UserProgressContext.Provider>
}

export default UserProgressContext;