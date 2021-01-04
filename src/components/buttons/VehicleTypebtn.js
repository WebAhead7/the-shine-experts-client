import './VehicleTypeBtn.css';
const VehicleTypeBtn = ({ icon, name, history }) => {
  const onClick = () => {
    history.push('/');
  };

  return (
    <button className="vehicleTypeBtn" onClick={onClick}>
      <img src={icon} alt="" /> <h4>{name}</h4>
    </button>
  );
};

export default VehicleTypeBtn;
