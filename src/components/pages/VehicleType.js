import { Car as Logo, Back, Logout } from '../../images/index';

import VehicleTypebtn from '../buttons/VehicleTypebtn';

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
  return (
    <div className="card">
      <div className="logo-div">
        <div>
          <button className="backbtn">
            <img src={Back} alt="" />
          </button>
        </div>
        <div>
          <img className="logo" src={Logo} alt="car" />
        </div>
        <div>
          <button className="logout-btn">
            <img src={Logout} alt="" />
          </button>
        </div>
      </div>
      <div>
        <VehicleTypebtn icon={CarIcon} name="car" history={history} />
        <VehicleTypebtn icon={Bus} name="bus" history={history} />
      </div>
      <div>
        <VehicleTypebtn
          icon={BiggerTruck}
          name="bigger truck"
          history={history}
        />
        <VehicleTypebtn icon={PickupIcon} name="pickup" history={history} />
      </div>
      <div>
        <VehicleTypebtn icon={BigTruck} name="truck" history={history} />
        <VehicleTypebtn icon={Motorcycle} name="motorcycle" history={history} />
      </div>
    </div>
  );
};

export default VehicleType;
