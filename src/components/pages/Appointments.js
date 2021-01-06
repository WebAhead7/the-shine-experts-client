/* eslint-disable react-hooks/exhaustive-deps */
import './Forms.css';
import { TypeBtn, LogoutBtn, BackBtn } from '../buttons/index';
import { Car as Logo } from '../../images/index';
import { useEffect, useState } from 'react';
import { appointmentState } from '../../atoms';

import { getBusinnesAppointments } from '../../axios/businesses';

const Appointments = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [serverErrMsg, setServerErrMsg] = useState('');
  const to = '/successfulorder';
  const freeAppointments = ['10:00', '10:30', '11:00', '11:30', '12:00'];

  const [freeAppointmentsForToday, SetFreeAppointmentsForToday] = useState([
    ...freeAppointments,
  ]);
  const [
    freeAppointmentsForTomorrow,
    SetFreeAppointmentsForTomorrow,
  ] = useState([...freeAppointments]);

  const filterAvailableAppointments = (
    freeAppointments,
    takenAppointments,
    setState
  ) => {
    setState(
      freeAppointments.filter((appointment) =>
        takenAppointments.indexOf(appointment) >= 0 ? false : true
      )
    );
  };

  useEffect(() => {
    const getAppointments = async () => {
      try {
        setLoading(true);
        const appointments = await getBusinnesAppointments({
          email: process.env.REACT_APP_BUSINESS_EMAIL,
        });

        console.log(appointments.today);

        filterAvailableAppointments(
          freeAppointmentsForToday,
          appointments.today,
          SetFreeAppointmentsForToday
        );

        console.log(freeAppointmentsForToday);

        filterAvailableAppointments(
          freeAppointmentsForTomorrow,
          appointments.tomorrow,
          SetFreeAppointmentsForTomorrow
        );
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setServerErrMsg(err.message);
      }
    };

    getAppointments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (serverErrMsg) {
    return <div>{serverErrMsg}</div>;
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
