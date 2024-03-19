import 'bootstrap/dist/css/bootstrap.min.css';
import { CardPersonalized, LinkPersonalizado, ButtonPersonalized } from "./context";
import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import { Form, useFormik, resetForm } from 'formik';
import AllData from './allData';


function CreateAccount() {
    const [idElement,setIdElement] = useState(0)
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(true);
    const [dissabledButton, setdissabledButton] = useState(true)
    const ctx = useContext(UserContext);

    
    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            alert("Account creation successful"); console.log(values);            
            setShow(false);
        },

        validate: (values) => {
          let errors = {};
          if (!values.name) errors.name = <span className="alert alert-danger d-flex align-items-center" > <strong> Field required</strong></span> ;

          
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
        setdissabledButton(false);
        return errors;
        },
      });

     
      

      console.log("formik const:", formik.values);
      const formikConst = formik.values;
      const formikCopy = formikConst;
      console.log("formik copy:", formikCopy);
      //I want to put ID in each array inside users to identifye with key and then to be able to create map fuction to find if the user exist or no, i may need to turn the id in string to aviod changes//
      const updatingData = (e) => {
        ctx.users.push(formikCopy);
      };
      

    function clearForm() {
        formik.resetForm();
        updatingData();
        setdissabledButton(true);
        setShow(true);
    };

    return (
        <div >
        
            {/* <h6>{JSON.stringify(ctx)}</h6> */}
        
        <CardPersonalized
            width="50"
            header="Create your Account"
            title="Welcome to the Bank"
            center="true"
            status={status}
            body={ show ? (
                <form
                onSubmit={formik.handleSubmit}>
                <div>Name:</div>
                <input
                    className="form-control" 
                    id="name" 
                    type="text"
                    name="name"
                    placeholder="Enter name"  
                    onChange={formik.handleChange}
                    value={formik.values.name}
                ></input>
                {" "}
                <br></br>
                {formik.errors.name ? (<div className="error-validation">{formik.errors.name}</div>) : null}
                {" "}
                <br></br>
                <div>Last Name:</div>
                <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="name" 
                    placeholder="Enter lastname"  
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                ></input>
                {" "}
                <br></br>
                {formik.errors.lastName ? (<div className="error-validation">{formik.errors.lastName}</div>) : null}
                {" "}
                <br></br>
                <div>Email:</div>
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
                <div>Password:</div>
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
                    titleButton="Create Account"
                    type="submit"
                    name="submitBtn"
                    className="button"
                    // disabled={dissabledButton ? 'disabled' : null}
                    disabled={dissabledButton}
                />
                </div>
                </div>
                </div>
                </form>
                ):(
                <>
                <h5 className="alert alert-success">You have successfully created your account.</h5>
                <div className="row">
                    <div className="col">
                        <ButtonPersonalized 
                        titleButton="Create Another Account"
                        handleOnclick={clearForm}
                        />
                    </div>
                </div>
                </>
            )}
        />
        </div>
    )
}

export default CreateAccount;