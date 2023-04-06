import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import hotelService from "../../services/hotel.service";

const HotelList = () => {

  const [hotels, setHotel] = useState([]);

  const init = () => {
    hotelService.getAll()
      .then(response => {
        console.log('Printing hotel data', response.data.data.hotel);
        setHotel(response.data.data.hotel);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    hotelService.remove(id)
      .then(response => {
        console.log('hotel deleted successfully', response.data.data.hotel);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of Hotel</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Hotel</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
          {
            hotels.map(hotel => (
              <tr key={hotel.id}>
                <td>{hotel.name}</td>
                <td>{hotel.address}</td>
                <td>{hotel.email}</td>
                <td>{hotel.phoneNumber}</td>
                <td>{hotel.rating}</td>
                <td>
                  <Link className="btn btn-info" to={`/hotel/edit/${hotels.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(hotel.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default HotelList;