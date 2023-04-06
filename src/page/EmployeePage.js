import { BrowserRouter, Switch, Route } from 'react-router-dom';
import hotelList from '../components/hotel/HotelList';
import NotFound from '../components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddHotel from '../components/hotel/AddHotel';
import chainList from '../components/hotelChain/ChainList';
import AddHotelChain from '../components/hotelChain/AddChain';

function EmployeePage() {
  return (
    <BrowserRouter>
      <div>
      {/*  <div>
          <Switch>
            <Route exact path="/" component={hotelList} />
            <Route path="/add" component={AddHotel} />
            <Route path="/hotel/edit/:id" component={AddHotel} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
  */}
        <div>
          <Switch>
            <Route exact path="/" component={chainList} />
            <Route path="/add" component={AddHotelChain} />
            <Route path="/chain/edit/:id" component={AddHotelChain} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>

      </div>
    </BrowserRouter>

    
  );
}


export default EmployeePage;