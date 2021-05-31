import React from 'react';
import { useRequestsContext } from '../../context/DataServices/Requests';
import { Select } from './styles';

const ItemType: React.FC = () => {
    const { details } = useRequestsContext();
    console.log(details.length)
    return <>
        {
            details.map((m, i) => <Select.Item key={String(i)} value={m.id} label={m.name} />)
        }
    </>
}

export default React.memo(ItemType);