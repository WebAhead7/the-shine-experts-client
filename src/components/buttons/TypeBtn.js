import { useSetRecoilState } from 'recoil';
import './TypeBtn.css';
const TypeBtn = ({ icon, name, history, to, state, value, widthAndHeigth }) => {
  const setType = useSetRecoilState(state);
  const onClick = () => {
    setType(value);
    history.push(to);
  };

  let style = {};
  if (widthAndHeigth) {
    style = { width: widthAndHeigth, height: widthAndHeigth, margin: 10 };
  }

  return (
    <button className="TypeBtn" style={style} onClick={onClick}>
      {icon ? <img src={icon} alt="icon" /> : null} <h4>{name}</h4>
    </button>
  );
};

export default TypeBtn;
