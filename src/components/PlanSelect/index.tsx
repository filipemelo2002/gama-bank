import React from 'react';

import { Select } from './style';

const PlanSelect: React.FC = () => {
  return (
    <Select defaultValue="plano">
      <option value="plano" hidden>
        Plano
      </option>
    </Select>
  );
};

export default PlanSelect;
