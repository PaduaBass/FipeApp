import React from 'react';
import { useRequestsContext } from '../../context/DataServices/Requests';
import { Select } from './styles';
interface ItemSelectProps {
    type: number
}
const ItemSelect: React.FC<ItemSelectProps> = ({ type }) => {
    const { marcasCarros, marcasMotos, marcasTrucks } = useRequestsContext();

    if (type === 1) {
        return <>
            { marcasCarros.map((mc, index) => {
                return (
                    <Select.Item key={String(index)} value={mc.id} label={mc.name} />
                )
            })}
        </>
    }
    if (type === 2) {
        return <>
            { marcasMotos.map((mc, index) => {
                return (
                    <Select.Item key={String(index)} value={mc.id} label={mc.name} />
                )
            })}
        </>
    }

    if (type === 3) {
        return <>
            { marcasTrucks.map((mc, index) => {
                return (
                    <Select.Item key={String(index)} value={mc.id} label={mc.name} />
                )
            })}
        </>
    }

    return <Select.Item  value="" label=""/>;


}

export default React.memo(ItemSelect);