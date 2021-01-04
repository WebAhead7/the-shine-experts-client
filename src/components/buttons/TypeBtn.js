import { useSetRecoilState } from 'recoil';
import './TypeBtn.css';
const TypeBtn = ({ icon, name, history, to, state, value }) => {
  const setType = useSetRecoilState(state);
  const onClick = () => {
    setType(value);
    history.push(to);
  };

  return (
    <button className="TypeBtn" onClick={onClick}>
      <img src={icon} alt="icon" /> <h4>{name}</h4>
    </button>
  );
};

export default TypeBtn;
