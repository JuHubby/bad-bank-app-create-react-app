import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import { ButtonPersonalized, CardPersonalized } from "./context";
import Data from "./data";

// const ChildComponent = ({ exerciseManager }) => {
//     return (
//       <div>
//         {/* Use the value in the child component */}
//         <p>Exercise Manager: {exerciseManager}</p>
//       </div>
//     );
//   };

function AllData() {
    const [loaded, setLoaded] = useState(false);
    const [status, setStatus] = useState('');
 
    const ctx = useContext(UserContext);

   
    function handleLoad () {

        console.log(ctx.users);
        setLoaded(true);
        if(!loaded) {
            // change settimeout for async function
        setStatus(<span className="alert alert-danger d-flex align-items-center" > Oh my guacamole! Something's not quite right..</span>);
        setTimeout(() => setStatus (''), 3000);
        };

       setLoaded(true);

    };
 

    return (
        <CardPersonalized
        width="auto"
        header="Summary Accounts"
        title="Data Table"
        nameButton="Save"
        hdColor="dark"
        center="true"
        body= { <div>
            <ButtonPersonalized
        titleButton="Retrieve data"
        handleOnclick={handleLoad}/>
        <div className="container">
        {loaded && ctx.users.map((user,i) =>
            <>
            <user-row key={i}
            name={user.name} 
            lastName={user.lastName}
            email={user.email}
            password={user.password}
            balance={user.balance}
                />
            </>                
            )
        }
        <br/>
        </div>
        </div> }
        />

    );
}

export default AllData;