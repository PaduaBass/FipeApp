import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';
import { MarcasCarros, Modelo, Detail } from '../Interfaces';

// import { Container } from './styles';
interface RequestContextProps {
    getData(): Promise<void>;
    getModelos(idMarca: any, type: string): Promise<void>;
    getDetails(idMarca: any, idModelo: any, type: string): Promise<void>;
    marcasCarros: MarcasCarros[];
    marcasMotos: MarcasCarros[];
    marcasTrucks: MarcasCarros[];
    modelos: Modelo[];
    details: Detail[];
}
const RequestsContext = createContext<RequestContextProps>({} as RequestContextProps);
const RequestsProvider: React.FC = ({ children }) => {
    const [marcasCarros, setMarcasCarros] = useState<MarcasCarros[]>([]);
    const [marcasMotos, setMarcasMotos] = useState<MarcasCarros[]>([]);
    const [marcasTrucks, setMarcasTrucks] = useState<MarcasCarros[]>([]);
    const [modelos, setModelos] = useState<Modelo[]>([]);
    const [details, setDetails] = useState<Detail[]>([]);

    const getData = useCallback(async () => {
        const responseCar = await api.get('carros/marcas.json');
        const responseMoto = await api.get('motos/marcas.json');
        const responseTruck = await api.get('caminhoes/marcas.json');
        setMarcasCarros(responseCar.data);
        setMarcasMotos(responseMoto.data);
        setMarcasTrucks(responseTruck.data);
    },[]);

    const getModelos = useCallback(async(idMarca: any, type: string) => {
        const response = await api.get(`${type}/veiculos/${idMarca}.json`);
        setModelos(response.data);
    },[]);

    const getDetails = useCallback(async(idMarca: any, idModelo: any, type: string) => {
        const response = await api.get(`${type}/veiculo/${idMarca}/${idModelo}.json`);
        setDetails(response.data);
    },[]);


    useEffect(() => {
        getData();
    },[])

    return <RequestsContext.Provider value={{ marcasCarros, marcasMotos, marcasTrucks, getData, getModelos, getDetails, modelos, details }} >{ children }</RequestsContext.Provider>;
}

function useRequestsContext () {
    const context = useContext(RequestsContext);
    if(!context) throw new Error('Context Request is undefined');
    return context;
}


export { RequestsProvider, useRequestsContext };