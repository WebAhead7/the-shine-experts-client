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
          history={history}
          state={vehicleTypeState}
          to={to}
        />
        <TypeBtn
          icon={Bus}
          name="bus"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
      </div>
      <div>
        <TypeBtn
          icon={BiggerTruck}
          name="bigger truck"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
        <TypeBtn
          icon={PickupIcon}
          name="pickup"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
      </div>
      <div>
        <TypeBtn
          icon={BigTruck}
          name="truck"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
        <TypeBtn
          icon={Motorcycle}
          name="motorcycle"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
      </div>
    </div>
  );
};

export default VehicleType;
