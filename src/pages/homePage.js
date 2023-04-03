import React from "react"
import {Link} from "react-router-dom";

class HomePage extends React.Component{
    render() {
        return(
            <div>
                <div className="ui item menu">

                    <a className="item" href={"/customer"}>Customer</a>


                </div>
                <h1>E-hotel</h1>
                {/*<Link to={"/customer"}>*/}


            </div>
        )
    }
}

export default HomePage