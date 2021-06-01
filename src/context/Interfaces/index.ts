

export interface MarcasCarros {
    name: string
    fipe_name: string
    order: number
    key: string
    id: number
}

export interface Modelo {
    fipe_marca: string;
    fipe_name: string;
    id: number;
    key: string;
    marca: string;
    name: string;
}

export interface Detail {
    fipe_marca: string;
    fipe_codigo: string;
    name: string;
    marca: string;
    key: string;
    veiculo: string;
    id: string;
}

export interface DetailComplete{
    id: string;
    ano_modelo: string;
    marca: string;
    name: string;
    veiculo: string;
    preco: string;
    combustivel: string;
    referencia: string;
    fipe_codigo: string;
    key: string;
}