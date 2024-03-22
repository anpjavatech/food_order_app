import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error"

const initialConfig = {};
export default function Meals(){

    const {data: loadedMeals, isLoading, error} = useHttp("http://localhost:3000/meals", initialConfig, []);

    if(isLoading){
        return <p className="center">Data fetching is in prgress.</p>;
    }

    if(error){
        return <Error title="Failed to Fetch Meals !!.." message={error} />
    }

    return (
        <section>
            <ul id="meals">
                {loadedMeals.map((meal)=> <MealItem key={meal.id} meal={meal}/>)}
            </ul>
        </section>
    );
}