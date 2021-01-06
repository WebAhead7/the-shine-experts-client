import { Car as Logo } from '../../images/index';

import { TypeBtn, LogoutBtn, BackBtn } from '../buttons/index';

import { washTypeState } from '../../atoms';

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
          <BackBtn history={history} />
        </div>
        <div>
          <img className="logo" src={Logo} alt="car" />
        </div>
        <div>
          <LogoutBtn history={history} />
        </div>
      </div>
      <div>
        <TypeBtn
          icon={AutoCarWash}
          name="Auto car washing"
          value="Auto car washing"
          history={history}
          state={washTypeState}
          to={to}
        />

        <TypeBtn
          icon={HandWashing}
          name="Hand washing"
          value="Hand washing"
          history={history}
          state={washTypeState}
          to={to}
        />
      </div>
      <div>
        <TypeBtn
          icon={CleanEngine}
          name="Clean engine"
          value="Clean engine"
          history={history}
          state={washTypeState}
          to={to}
        />

        <TypeBtn
          icon={Oil}
          name="Oil"
          value="Oil change"
          history={history}
          state={washTypeState}
          to={to}
        />
      </div>
      <div>
        <TypeBtn
          icon={Polishing}
          name="Polishing"
          value="Polishing"
          history={history}
          state={washTypeState}
          to={to}
        />

        <TypeBtn
          icon={InsideCarCleaning}
          name="Inside cleaning"
          value="Inside cleaning"
          history={history}
          state={washTypeState}
          to={to}
        />
      </div>
    </div>
  );
};

export default WashingType;
