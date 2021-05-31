import React from 'react';
import { useRequestsContext } from '../../context/DataServices/Requests';
import { Select } from './styles';

const ItemModelo: React.FC = () => {
    const { modelos } = useRequestsContext();
    console.log(modelos.length)
    return <>
        {
            modelos.map((m, i) => <Select.Item key={String(i)} value={m.id} label={m.name} />)
        }
    </>
}

export default React.memo(ItemModelo);