import React from 'react';
import { Button } from './style';

import { AiOutlineLogout } from 'react-icons/ai';

const Logout: React.FC = () => {
  function logout() {
    localStorage.removeItem('@tokenApp');
    window.location.reload();
  }

  return (
    <Button onClick={logout}>
      <AiOutlineLogout size={30} color="#8C52E5" />
    </Button>
  );
};

export default Logout;
