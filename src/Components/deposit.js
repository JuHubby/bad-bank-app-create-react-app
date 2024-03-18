import { CardPersonalized, ButtonPersonalized } from "./context";
import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../App";

function Deposit() {
    const [depositAmount, setDepositAmount] = useState("");
    const [status, setStatus]= useState("");
    const [balance, setBalance] = useState(0);
    const [show, setShow] = useState(true);
    const [idElement, setIdElement] = useState(0);
    const ctx = useContext(UserContext);

    function validate(field, label) {
        if(!field){
            setStatus(<span className="alert alert-danger d-flex align-items-center" > Holy guacamole! You should check in on the {label} field above.</span>);
            setTimeout(() => setStatus (''), 3000);
            
            return false;
        };
        if(field <= 0 ) {
            setStatus(<span className="alert alert-danger d-flex align-items-center" > Ups! 
            You're not able to deposit a negative amount. Please choose a positive number.</span>);
            setTimeout(() => setStatus (''), 3000);
            return false;
        } 
        return true
    
    }

    function handleDeposit() {
        
        if(!validate(depositAmount, 'Deposit Amount')) return;
        // i will think that setbalance is going to be setvariable after addign setdeposit and then push to usercontext object somehow//
        // const balance = balancebefore + depositAmount;   
        const totalBalanceSofar = parseInt(depositAmount)+parseInt(balance)
        setBalance(totalBalanceSofar);
        for(let i=1; i < ctx.users.length; i++ ) {
            const keyValue = i;
            // ctx.users[i].push({...ctx.users, keyValue});
            setIdElement(keyValue);
        }
        // ctx.users.push({idElement,name,email,lastName,password});
        // console.log(idElement,name,email,lastName,password);
        setShow(false); 
    }

    function clearForm() {
        setDepositAmount("");
        setShow(true);

    }

    return (
        <>
            <h1>Deposit </h1>
            <CardPersonalized
             wide="50"
             header="Deposit"
             center="true"
             status={status}
             body= {show ? (
                <>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <h5>Balance</h5>
                        </div>
                        <div className="col">
                            <h5>{'$ '+ balance}</h5>
                        </div>
                    </div>
                </div>
                Deposit Amount <br/>
                <input type="number" className="form-control" 
                id="depositAmount" 
                placeholder="Enter Amount" 
                value={depositAmount} 
                onChange={e => setDepositAmount(e.currentTarget.value)}>
                </input> <br/>
                <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <ButtonPersonalized
                                titleButton="Deposit"
                                handleOnclick={handleDeposit}
                                />
                            </div>
                        </div>
                    </div>
             </>) :
             (
                <>
                {/* add emoji happy */}
                {/* <i className="bi bi-emoji-smile"></i> */}
                <h5  className="alert alert-success text-center" >The deposit was successful.</h5>
                <br/>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <h5>Your new balance is:</h5>
                        </div>
                        <div className="col">
                            <h5>{'$ '+ balance}</h5>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                        <div className="col">
                            <ButtonPersonalized 
                            titleButton="Make a new deposit."
                            handleOnclick={clearForm}
                            />
                        </div>
                    </div>
                </>
            )}

            />

        </>
    );
}

export default Deposit;