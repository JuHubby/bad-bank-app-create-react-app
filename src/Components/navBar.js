import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar () {


    return (
        <>
        <div className='hero'>
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <a id="logo" className="navbar-brand" href="#"> BadBank</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav nav-fill">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#/CreateAccount/"> Create Account</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#/login/">Login</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#/deposit/">Deposit</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#/withdraw/">Withdraw</a>
                </li>
                <li>
                <a className="nav-link active" aria-current="page" href="#/balance/">Balance</a>
                </li>
                <li>
                <a className="nav-link active" aria-current="page" href="#/alldata/">AllData</a>
                </li>
             
            </ul>
            </div>
            
        </div>
        </nav>
        </div>
        
        <br/>
        </>
        
    )
}

export default NavBar;
