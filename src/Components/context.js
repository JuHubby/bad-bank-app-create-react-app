const defaultColor = "success";

// with: 25,50,75 or 100 or auto. colors $colors: (
    // $theme-colors: (
    //     "primary":    $primary,
    //     "secondary":  $secondary,
    //     "success":    $success,
    //     "info":       $info,
    //     "warning":    $warning,
    //     "danger":     $danger,
    //     "light":      $light,
    //     "dark":       $dark
    //   );

function CardPersonalized(props) {

        function classes() {
            const hd = props.hdColor ? `${props.hdColor}` : defaultColor;
            const txt= props.txtColor ? `text-${props.txtColor} ` : `text-`;
            return `card-header ${txt}bg-${hd} mb-3 `;
        };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <br/>
                    <div className={`card text-ligth shadow-lg mb-3 border border-0 ${props.center == "true" ? "m-auto" :" " } float-none ${props.width ? `w-${props.width} mb-3` : ''} `} style={{ width: '18rem' }}>
                        <div className={classes()}><h5>{props.header}</h5></div>
                        <div className="card-body">  
                            <div className={`col text-${props.textCenter =="true" ? "center" : "start"}`}>
                                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                                {props.text && (<p className="card-text">{props.text}</p>)}
                                {props.image && (<><img src={props.image} className="card-img-top" alt="..."></img> </>)}
                                <br/>
                                {props.body}
                                <br/>
                            </div>
                            {props.status && (<div id='createStatus'> {props.status}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
        
    );
}

function ButtonPersonalized(props) {


    return (
        <>
        <div className="container text-center">
        <div className="row">
        <div className="col">
            <button onClick={props.handleOnclick} className={`btn btn-${props.color ? props.color : defaultColor}`}>{props.titleButton}</button>
        </div>
        </div>
        </div>
        </>
    )
    }


function LinkPersonalizado(props) {
        return (
            <>
            <div className="container text-center">
            <div className="row">
            <div className="col">
                <a href={props.handleOnclick} className={`btn btn-${props.color ? props.color : defaultColor}`}>{props.titleButton}</a>
            </div>
            </div>
            </div>
            </>
        )
        }

export {CardPersonalized, ButtonPersonalized, LinkPersonalizado};