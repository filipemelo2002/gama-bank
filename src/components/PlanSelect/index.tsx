import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Select } from './style';
import * as Creators from '../../redux/action/planning';
interface Props {
  value?: number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PlanSelect: React.FC<Props> = ({ value, onChange }) => {
  const plans = useSelector((state: State) => state.planning.plannings);
  const { login } = useSelector((state: State) => state.auth.usuario);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Creators.loadData(login));
  }, []);
  return (
    <Select defaultValue="plano" value={value} onChange={onChange}>
      <option value="plano" hidden>
        Plano
      </option>
      {plans?.map(plan => (
        <option value={plan.id} key={plan.id}>
          {plan.descricao}
        </option>
      ))}
    </Select>
  );
};

export default PlanSelect;
