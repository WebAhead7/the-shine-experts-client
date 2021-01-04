import { vehicleTypeState } from '../../atoms';
import { useSetRecoilState } from 'recoil';
import './VehicleTypeBtn.css';
const VehicleTypeBtn = ({ icon, name, history }) => {
  const setVehicleType = useSetRecoilState(vehicleTypeState);
  const onClick = (e) => {
    history.push('/washingtype');
  };

  return (
    <button className="vehicleTypeBtn" onClick={onClick}>
      <img src={icon} alt="icon" /> <h4>{name}</h4>
    </button>
  );
};

export default VehicleTypeBtn;
