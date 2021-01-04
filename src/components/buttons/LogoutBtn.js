import { Logout } from '../../images/index';
import { logout } from '../../axios/authUser';
const LogoutBtn = ({ history }) => {
  const onClick = () => {
    logout();
    history.push('/');
  };

  return (
    <button className="logoutBtn" onClick={onClick}>
      <img src={Logout} alt="logout" />
    </button>
  );
};

export default LogoutBtn;
