import './Forms.css';
import { TypeBtn } from '../buttons/index';
import { Car as Logo } from '../../images/index';

import { appointmentState } from '../../atoms';

const Appointments = ({ history }) => {
  const to = '/successfulorder';
  const options = [
    { label: '10:00', value: 10 },
    { label: '10:30', value: 10.5 },
    { label: '11:00', value: 11 },
    { label: '11:30', value: 11.5 },
    { label: '12:00', value: 12 },
    { label: '12:30', value: 12.5 },
    { label: '13:00', value: 13 },
    { label: '13:30', value: 13.5 },
    { label: '14:00', value: 14 },
    { label: '14:30', value: 14.5 },
    { label: '15:00', value: 15 },
    { label: '15:30', value: 15.5 },
    { label: '16:00', value: 16 },
  ];

  const days = ['Today', 'Tomorrow'];

  return (
    <div className="card">
      <div className="logo">
        <img className="logo" src={Logo} alt="car" />

        {days.map((day) => (
          <div key={day}>
            <h1>{day}</h1>
            {options.map((option) => (
              <TypeBtn
                widthAndHeigth={50}
                name={option.label}
                state={appointmentState}
                history={history}
                value={option.value}
                to={to}
                key={option.value}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
