/* eslint-disable react-hooks/exhaustive-deps */
import './Forms.css';
import { TypeBtn, LogoutBtn, BackBtn } from '../buttons/index';
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

  const filterAvailableAppointments = (freeAppointments, takenAppointments) => {
    freeAppointments = freeAppointments.filter((appointment) =>
      takenAppointments.indexOf(appointment) >= 0 ? false : true
    );
  };

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const appointments = await getBusinnesAppointments({
          email: process.env.REACT_APP_BUSINESS_EMAIL,
        });

        setAppointments(appointments);

        filterAvailableAppointments(
          freeAppointmentsForToday,
          appointments.today
        );

        filterAvailableAppointments(
          freeAppointmentsForTomorrow,
          appointments.tomorrow
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
        <h1>Today</h1>
        {freeAppointmentsForToday.map((appointment) => (
          <TypeBtn
            widthAndHeigth={50}
            name={appointment}
            state={appointmentState}
            history={history}
            value={{ day: 'today', hour: appointment }}
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
            value={{ day: 'tomorrow', hour: appointment }}
            to={to}
            key={appointment}
          />
        ))}
      </div>
    </div>
  );
};

export default Appointments;
