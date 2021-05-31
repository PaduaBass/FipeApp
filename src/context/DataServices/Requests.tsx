import React, { createContext, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';
import { MarcasCarros } from '../Interfaces';

// import { Container } from './styles';
interface RequestContextProps {
    getData(): Promise<void>;
    marcasCarros: MarcasCarros[];
    marcasMotos: MarcasCarros[];
    marcasTrucks: MarcasCarros[];
}
const RequestsContext = createContext<RequestContextProps>({} as RequestContextProps);
const RequestsProvider: React.FC = ({ children }) => {
    const [marcasCarros, setMarcasCarros] = useState<MarcasCarros[]>([]);
    const [marcasMotos, setMarcasMotos] = useState<MarcasCarros[]>([]);
    const [marcasTrucks, setMarcasTrucks] = useState<MarcasCarros[]>([]);

    const getData = async () => {
        const responseCar = await api.get('carros/marcas.json');
        const responseMoto = await api.get('motos/marcas.json');
        const responseTruck = await api.get('caminhoes/marcas.json');
        setMarcasCarros(responseCar.data);
        setMarcasMotos(responseMoto.data);
        setMarcasTrucks(responseTruck.data);
    }

    useEffect(() => {
        getData();
    },[])

    return <RequestsContext.Provider value={{ marcasCarros, marcasMotos, marcasTrucks, getData }} >{ children }</RequestsContext.Provider>;
}

function useRequestsContext () {
    const context = useContext(RequestsContext);
    if(!context) throw new Error('Context Request is undefined');
    return context;
}


export { RequestsProvider, useRequestsContext };