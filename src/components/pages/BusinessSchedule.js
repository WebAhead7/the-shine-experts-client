import { Car as Logo } from '../../images/index';
import { BackBtn, LogoutBtn } from '../buttons/index';
import './Types.css';
import './SuccessfulOrder.css';
import { vehicleTypeState } from '../../axios/orders';

const BusinessSchedule = ({ history }) => {
  const onClick = () => {
    history.push('/confirmation');
  };

  const Appointment = {
    userEmail: 'ahmad@gmail.com',
    businessEmail: 'TheShineExperts@gmail.com',
    orderDate: '10:00',
    orderType: 'Hand Wash',
    tomorrowOrToday: 'today',
  };
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
        <div className="Appointments-div">
          {Appointment.businessEmail},{Appointment.orderDate}
        </div>
      </div>
    </div>
  );
};

export default BusinessSchedule;
