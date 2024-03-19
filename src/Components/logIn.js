import { ButtonPersonalized, CardPersonalized, LinkPersonalizado } from "./context";
import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import { Form, useFormik, resetForm } from 'formik';



export const defaultBalance = 300;

function Login() {
    const [status, setStatus] = useState('');
    const [show, setShow] = useState(true);
    const ctx = useContext(UserContext);
    const { users: [ {balance}] } = ctx;
    console.log(`balance ${balance}`);
    // {users: [{id:0, name:'abel', lastName:'Becerra', email:'abel@mit.edu', password:'secret', balance:100}]}}>


   
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: (values) => {
            alert("Account log in successful"); console.log(values);            
            setShow(false);
        },

        validate: (values) => {
          let errors = {};
        
          if (!values.password) {
            errors.password = <span className="alert alert-danger d-flex align-items-center" > <strong> Field required</strong></span> ;} 
            else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(values.password))
            errors.password = 
            <span className="alert alert-danger d-flex align-items-center" > <strong> The password must contain minimum 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character</strong></span> ;
          if (!values.email) {
            errors.email = <span className="alert alert-danger d-flex align-items-center" > <strong> Field required</strong></span>; 
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = <span className="alert alert-danger d-flex align-items-center" > <strong> This field should include a valid email address</strong></span> ;
        } 
        return errors;
        },
      });

      function clearForm() {
        formik.resetForm();
        setShow(true);
    };

    return (
        <>
        <h6></h6> 
        <CardPersonalized
            
            header="Log into your Account"
            width="150"
            nameButton="Save"
            hdColor="dark"
            textCenter="true"
            status={status}
            body={show ? (
                <>
                <form
                onSubmit={formik.handleSubmit}>
                <strong>Email:</strong> <br/>
                <input 
                    className="form-control"
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    id="email" 
                    placeholder="Enter email address"
                ></input> 
                {" "}
                <br></br>
                {formik.errors.email ? (<div className="error-validation">{formik.errors.email}</div>) : null}
                {" "}
                <br></br>
                <strong>Password:</strong> <br/>
                <input 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter password" 
                    type="text"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                ></input> 
                {" "}
                <br></br>
                {formik.errors.password ? (<div className="error-validation">{formik.errors.password}</div>) : null}
                {" "}
                <br></br>
                <div className="container text-center">
                <div className="row">
                <div className="col">
                <ButtonPersonalized
                    titleButton="Log In"
                    type="submit"
                    name="submitBtn"
                    className="button"
                />
                </div>
                </div>
                </div>
                </form>
                </>
                ):(
                <>
                
                <p>Your current balance is:</p>
                <br/>
                {/* I want to link this to balance context or prop variable */}
                <h5>$ {balance}</h5>
                <br/>
                <div className="row">
                    <div className="col">
                        <ButtonPersonalized 
                        titleButton="Sing out"
                        handleOnclick={clearForm}
                        />
                    </div>
                </div>
                </>
            )}
        />
    
        </>    
    )
}

export default Login;