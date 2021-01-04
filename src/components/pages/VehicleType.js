import { Car as Logo, Back, Logout } from '../../images/index';

import { VehicleTypeBtn, LogoutBtn } from '../buttons/index';

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
  const onClickBack = () => {
    history.goBack();
  };

  return (
    <div className="card">
      <div className="logo-div">
        <div>
          <button className="backbtn" onClick={onClickBack}>
            <img src={Back} alt="" />
          </button>
        </div>
        <div>
          <img className="logo" src={Logo} alt="car" />
        </div>
        <div>
          <LogoutBtn history={history} />
        </div>
      </div>
      <div>
        <VehicleTypeBtn icon={CarIcon} name="car" history={history} />
        <VehicleTypeBtn icon={Bus} name="bus" history={history} />
      </div>
      <div>
        <VehicleTypeBtn
          icon={BiggerTruck}
          name="bigger truck"
          history={history}
        />
        <VehicleTypeBtn icon={PickupIcon} name="pickup" history={history} />
      </div>
      <div>
        <VehicleTypeBtn icon={BigTruck} name="truck" history={history} />
        <VehicleTypeBtn icon={Motorcycle} name="motorcycle" history={history} />
      </div>
    </div>
  );
};

export default VehicleType;
