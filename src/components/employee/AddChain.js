import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import hotelService from "../../services/hotel.service";

const AddChain = () => {
    const[chainId, setChainId] = useState('');
    const[name, setName] = useState('');
    const[address, setAddress] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[rating, setRating] = useState('');
    const[email, setEmail] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveHotel = (e) => {
        e.preventDefault();
        
        const hotel = { id, chainId, name, address, email, phoneNumber, rating};
        if (id) {
            hotelService.update(hotel)
                .then(response => {
                    console.log(' hotel updated successfully', response.data);
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            hotelService.create(hotel)
            .then(response => {
                console.log("hotel added successfully", response.data);
                history.push("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }
    useEffect(() => {
        if (id) {
            hotelService.get(id)
                .then(hotel => {
                    setChainId(hotel.data.chainId);
                    setName(hotel.data.name);
                    setAddress(hotel.data.address);
                    setEmail(hotel.data.email);
                    setPhoneNumber(hotel.data.phoneNumber);
                    setRating(hotel.data.rating);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add hotel</h3>
            <hr/>
            <form>
            <div className="form-group">
                    <input 
                        type="Bigint" 
                        className="form-control col-4"
                        id="chainId"
                        value={chainId}
                        onChange={(e) => setChainId(e.target.value)}
                        placeholder="Enter chain id"
                    />

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
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="Enter rating"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveHotel(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddHotel;