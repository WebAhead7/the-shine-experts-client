import './VehicleTypeBtn.css';
const VehicleTypeBtn = ({ icon, name, history }) => {
  const onClick = () => {
    history.push('/washingtype');
  };

  return (
    <button className="vehicleTypeBtn" onClick={onClick}>
      <img src={icon} alt="icon" /> <h4>{name}</h4>
    </button>
  );
};

export default VehicleTypeBtn;
