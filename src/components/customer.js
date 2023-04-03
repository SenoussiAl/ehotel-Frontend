import React from 'react'
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';


    function CreateUpdate(props){
        if(props.new === "true"){
            return(

                <Link to={"/employee"}>
                    <input className={"ui primary button"} type={"submit"} tabIndex="0" id={"submit"} value={"Submit"} onClick={()=> props.func(props.service)}/>
                </Link>

            )
        }
        
        else {
            return(

                <Link to={"/employee"}>
                    <input className={"ui primary button"}  id={"update"} type={"submit"} tabIndex="0" value={"Update"} onClick={()=> props.func(props.service)}/>
                </Link>

            )
        }

    }

class Customer extends React.Component{
    constructor(props){
        super(props);
        this.sendData=this.sendData.bind(this);
    }

    sendData(){
        const NAS = document.getElementById("customer_NAS").value
        const email = document.getElementById("customer_email").value
        const password = document.getElementById("customer_phone_number").value
        const firstName = document.getElementById("customer_name").value
        const middleName = document.getElementById("customer_middle_name").value
        const lastName = document.getElementById("customer_last_name").value
        const address = document.getElementById("customer_address").value
        const birth = document.getElementById("customer_DOB").value
        const registrationDate = new Date()
        const data = {};



        data.email = email;
        data.password = password;
        data.NAS = NAS;
        data.name = firstName +" "+ middleName+" " + lastName;
        data.address = address;
        data.birth = birth;
        data.registrationDate = registrationDate.getTime();
        console.log(data);
        console.log(this.props.service);


        fetch('http://localhost:5432//api/v1/user/register', {
            method: "POST",
            body:JSON.stringify(data)

        }).then((response) => response.json(), (err)=> {
            console.error(err)
        }).then((data) => {
            console.log(data);
            if (data.error) {
                alert("Error")
            } else {
                alert("User created")
            }
        })
    }



    render(){
        let button;
        if(this.props.submit){
            button = <CreateUpdate new={"true"} func={this.sendData} />
        }
        else {
            button = <CreateUpdate  func={this.sendData} />
        }
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <form className="ui form">
                        <h2 className="ui dividing header">Customer Information</h2>                            
                        <label>Enter your information</label>
                            <div className="three fields">
                                <div className="field">
                                    <input type="text" id={"firstName"} placeholder="First Name"/>
                                </div>
                                <div className="field">
                                    <input type="text" id={"middleName"} placeholder="Middle Name"/>
                                </div>
                                <div className="field">
                                    <input type="text" id={"lastName"} placeholder="Last Name"/>
                                </div>
                            </div>
                        <div className="field">

                            <div className="field">
                                <div className="field">
                                <label>NAS</label>
                                    <input type="text" id={"NAS"} name={"NAS"}placeholder="Your NAS"/>
                                </div>
                                </div>
                                <div className="field">
                                <div className="field">
                                <label>Email</label>
                                    <input type="text" id={"email"} placeholder="Email" />
                                </div>
                            </div>




                        </div>
                        <div className="field">
                            <label>Password</label>
                            <div className="twelve wide field">
                                <input type="text"  id={"password"} placeholder="Password"/>
                            </div>
                        </div>
                        <div className="field">
                            <label> Address</label>
                            <div className="fields">
                                <div className="twelve wide field">
                                    <input type="text"  id={"address"} placeholder="Address"/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span> {button}</span>
                            <span>
                                <input style= {{float:"right" }} className={"ui button"} type={"submit"} tabIndex="0" id={"back"} value={"back"} />
                            </span>
                            <br/>


                        </div>
                    </form>

                </div>



            </div>
        )
    }


}

export default Customer;
