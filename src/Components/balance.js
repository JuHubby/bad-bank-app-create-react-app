import { CardPersonalized, LinkPersonalizado, ButtonPersonalized } from "./context";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";


function Balance() {
    const ctx = useContext(UserContext);
    return (
        <h1>Balance </h1>
    )
}

export default Balance;