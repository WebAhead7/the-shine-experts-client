import { Car as Logo } from '../../images/index';

import { TypeBtn, LogoutBtn, BackBtn } from '../buttons/index';

import { vehicleTypeState } from '../../atoms';

import {
  AutoCarWash,
  CleanEngine,
  HandWashing,
  InsideCarCleaning,
  Oil,
  Polishing,
} from '../../images/washingTypes/index';

import './Types.css';

const WashingType = ({ history }) => {
  const to = '/appointments';

  return (
    <div className="card">
      <div className="logo-div">
        <div>
          <BackBtn />
        </div>
        <div>
          <img className="logo" src={Logo} alt="car" />
        </div>
        <div>
          <LogoutBtn />
        </div>
      </div>
      <div>
        <TypeBtn
          icon={AutoCarWash}
          name="Auto car washing"
          history={history}
          state={vehicleTypeState}
          to={to}
        />

        <TypeBtn
          icon={HandWashing}
          name="Hand washing"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
      </div>
      <div>
        <TypeBtn
          icon={CleanEngine}
          name="Clean engine"
          history={history}
          state={vehicleTypeState}
          to={to}
        />

        <TypeBtn
          icon={Oil}
          name="Oil"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
      </div>
      <div>
        <TypeBtn
          icon={Polishing}
          name="Polishing"
          history={history}
          state={vehicleTypeState}
          to={to}
        />

        <TypeBtn
          icon={InsideCarCleaning}
          name="Inside cleaning"
          history={history}
          state={vehicleTypeState}
          to={to}
        />
      </div>
    </div>
  );
};

export default WashingType;
