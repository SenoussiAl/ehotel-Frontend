import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import chainService from "../../services/hotelChain.service";

const AddHotelChain = () => {
    const[name, setName] = useState('');
    const[address, setAddress] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[rating, setRating] = useState('');
    const[email, setEmail] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveHotelChain = (e) => {
        e.preventDefault();
        const chain = { id,  name,  email, phoneNumber, address,rating};
        if (id) {
            chainService.update(chain)
                .then(response => {
                    console.log(' hotel updated successfully', response.data.data.Chain);
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            chainService.create(chain)
            .then(response => {
                console.log("hotel added successfully", response.data.data.Chain);
                history.push("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }
    useEffect(() => {
        if (id) {
            chainService.get(id)
                .then(chain => {
                    setName(chain.data.name);
                    setAddress(chain.data.address);
                    setEmail(chain.data.email);
                    setPhoneNumber(chain.data.phoneNumber);
                    setRating(chain.data.rating);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add hotel chain</h3>
            <hr/>
            <form>
            <div className="form-group">

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter phone number"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter address"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="Enter rating"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveHotelChain(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddHotelChain;