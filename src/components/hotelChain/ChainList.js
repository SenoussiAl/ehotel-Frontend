import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import chainService from "../../services/hotelChain.service";

const HotelChainList = () => {

  const [chains, setHotelChain] = useState([]);

  const init = () => {
    chainService.getAll()
      .then(response => {
        console.log('Printing hotel chain data', response.data.data.Chain);
        setHotelChain(response.data.data.Chain);
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
    chainService.remove(id)
      .then(response => {
        console.log('hotel chain deleted successfully', response.data.data.Chain);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  return (
    <div className="container">
      <h3>List of Hotel chain</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Hotel chain</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Chain name</th>
              <th>Chain email</th>
              <th>Chain phone number</th>
              <th>Chain address</th>
              <th>Chain rating</th>
            </tr>
          </thead>
          <tbody>
          {
            chains.map(chain => (
              <tr key={chain.id}>
                <td>{chain.name}</td>                
                <td>{chain.email}</td>
                <td>{chain.phoneNumber}</td>
                <td>{chain.address}</td>
                <td>{chain.rating}</td>
                <td>
                  <Link className="btn btn-info" to={`/chain/edit/${chain.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(chain.id);
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

export default HotelChainList;