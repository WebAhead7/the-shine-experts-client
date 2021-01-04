import { Back } from '../../images/index';
import './BackBtn.css';
const BackBtn = ({ history }) => {
  const onClick = () => history.goBack();

  return (
    <button className="backBtn" onClick={onClick}>
      <img src={Back} alt="back" />
    </button>
  );
};

export default BackBtn;
