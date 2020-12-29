import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { token as tokenAtom } from './atoms';
function App() {
  const [token, setToken] = useRecoilState(tokenAtom);
  useEffect(() => {
    const tokenSaved = localStorage.getItem('token');
    if (tokenSaved) {
      setToken(tokenSaved);
    }
  }, []);

  return <div>{token}</div>;
}

export default App;
