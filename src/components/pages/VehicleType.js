import { Car as Logo } from '../../images/index';

import { TypeBtn, LogoutBtn } from '../buttons/index';

import { vehicleTypeState } from '../../atoms';

import {
  CarIcon,
  BiggerTruck,
  BigTruck,
  Bus,
  Motorcycle,
  PickupIcon,
} from '../../images/vehicleTypes/index';

import './Types.css';

const VehicleType = ({ history }) => {
  const to = '/washingtype';
  return (
    <div className="card">
      <div className="logo-div">
        <div>
          <img className="logo" src={Logo} alt="car" />
        </div>
        <div>
          <LogoutBtn history={history} />
        </div>
      </div>
      <div>
        <TypeBtn
          icon={CarIcon}
          name="car"
          value="Car"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
        <TypeBtn
          icon={Bus}
          name="bus"
          value="Bus"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
      </div>
      <div>
        <TypeBtn
          icon={BiggerTruck}
          name="bigger truck"
          value="Bigger truck"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
        <TypeBtn
          icon={PickupIcon}
          name="pickup"
          value="Pickup"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
      </div>
      <div>
        <TypeBtn
          icon={BigTruck}
          name="truck"
          value="Truck"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
        <TypeBtn
          icon={Motorcycle}
          name="motorcycle"
          value="Motorcyle"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
      </div>
    </div>
  );
};

export default VehicleType;
