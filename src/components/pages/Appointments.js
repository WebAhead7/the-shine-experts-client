import './Forms.css';
import { TypeBtn } from '../buttons/index';
import { Car as Logo } from '../../images/index';
import { useEffect, useState } from 'react';
import { appointmentState } from '../../atoms';

import { getBusinnesAppointments } from '../../axios/businesses';

const Appointments = ({ history }) => {
  const [appointments, setAppointments] = useState({});
  const [serverErrMsg, setServerErrMsg] = useState('');
  const to = '/successfulorder';
  const freeAppointments = ['10:00', '10:30'];

  let freeAppointmentsForToday = [...freeAppointments];
  let freeAppointmentsForTomorrow = [...freeAppointments];

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const appointments = await getBusinnesAppointments({
          email: process.env.REACT_APP_BUSINESS_EMAIL,
        });

        setAppointments(appointments);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        freeAppointmentsForToday = freeAppointmentsForToday.filter(
          (appointment) =>
            appointments.today.indexOf(appointment) >= 0 ? false : true
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
        freeAppointmentsForTomorrow = freeAppointmentsForTomorrow.filter(
          (appointment) =>
            appointments.tomorrow.indexOf(appointment) >= 0 ? false : true
        );
      } catch (err) {
        setServerErrMsg(err.message);
      }
    };

    getAppointments();
  }, []);

  if (!appointments) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="card">
      <div className="logo">
        <img className="logo" src={Logo} alt="car" />

        <div>
          <h1>Today</h1>
          {freeAppointmentsForToday.map((appointment) => (
            <TypeBtn
              widthAndHeigth={50}
              name={appointment}
              state={appointmentState}
              history={history}
              value={appointment}
              to={to}
              key={appointment}
            />
          ))}
        </div>

        <div>
          <h1>Tomorrow</h1>
          {freeAppointmentsForTomorrow.map((appointment) => (
            <TypeBtn
              widthAndHeigth={50}
              name={appointment}
              state={appointmentState}
              history={history}
              value={appointment}
              to={to}
              key={appointment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
