import { Car as Logo } from '../../images/index';
import { BackBtn, LogoutBtn } from '../buttons/index';
import './Types.css';
import './SuccessfulOrder.css';
import { Checked } from '../../images/confirmation/index.js';

const Confirmation = ({ history }) => {
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
      <div className="content-div">
        <div className="barcode-div">
          <h2>Your Order has been saved successfully </h2>
          <img src={Checked} alt="" />
          <h4>order number :23456789</h4>
        </div>
        <div className="thank-div">
          <h3>Thank you for choosing our business!!</h3>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
