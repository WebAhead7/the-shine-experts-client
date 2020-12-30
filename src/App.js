import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { token as tokenAtom } from './atoms';

import SignInForm from './components/SignInForm';

function App() {
  const [token, setToken] = useRecoilState(tokenAtom);
  useEffect(() => {
    const tokenSaved = localStorage.getItem('token');
    if (tokenSaved) {
      setToken(tokenSaved);
    }
  }, []);

  return (
    <div>
      <SignInForm />
    </div>
  );
}

export default App;
