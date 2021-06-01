import React, { useState, useRef, useCallback } from 'react';
import { ActivityIndicator, ListRenderItem, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useRequestsContext } from '../../context/DataServices/Requests';
import { MarcasCarros } from '../../context/Interfaces';
import { Container, Content, Input, Row, Select, ViewIcon, ViewSelect, AnimationContainer, Label, PriceLabel, Title, ViewTitle, Logo, RowPure } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemSelect from '../../components/ItemSelect';
import { Animated } from 'react-native';
import ItemModelo from '../../components/ItemModelo';
import ItemType from '../../components/ItemType';
import logo from '../../../assets/fipe.jpeg';

interface ValuesAnimated {
    car: Animated.Value;
    moto: Animated.Value;
    truck: Animated.Value;
}

const Home: React.FC = () => {
    const { getModelos, getDetails, getDetailComplete, detail, resetDetail } = useRequestsContext();
    const [selectMark, setSelectMark] = useState<any>('');
    const [selectModelo, setSelectModelo] = useState<any>('');
    const [selectAnoTipo, setSelectAnoTipo] = useState<any>('');
    

    let value = useRef<ValuesAnimated>({
        car: new Animated.Value(0),
        moto: new Animated.Value(0),
        truck: new Animated.Value(0),
    }).current;
    
    const [selected, setSelected] = useState({
        car: false,
        moto: false,
        truck: false,
    })

    const animate = useCallback((type: number) => {
        Animated.timing(value.car, {
            toValue: type === 1 ? 1 : 0,
            duration: 500,
            useNativeDriver: true,

        }).start();
        Animated.timing(value.moto, {
            toValue: type === 2 ? 1 : 0,
            duration: 500,
            useNativeDriver: true,

        }).start();
        Animated.timing(value.truck, {
            toValue: type === 3 ? 1 : 0,
            duration: 500,
            useNativeDriver: true,

        }).start();
    }, [])

    const handleSelectType = useCallback((type: number) => {
        animate(type);
        setSelected({
            car: type === 1 ? true : false,
            moto: type === 2 ? true : false,
            truck: type === 3 ? true : false,
        });
        setSelectMark('');
        setSelectModelo('');
        setSelectAnoTipo('');
        resetDetail();
    }, []);

    return <Container>
        <Content>
            <ViewTitle>
                <Title>CONSULTA PREÇOS DE VEÍCULOS</Title>
                <Logo source={logo} width={40} height={40} />
            </ViewTitle>

            <Row>
                <AnimationContainer style={{
                    transform: [{
                        translateY: value.car.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -10]
                        })
                    }],
                    opacity: value.car.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1]
                    }),
                }} >
                    <ViewIcon selected={selected.car} onPress={() => handleSelectType(1)}>
                        <Icon name="car-side" size={30} color={selected.car ? "#008B8B" : "#333"} />
                    </ViewIcon>
                </AnimationContainer>

                <AnimationContainer style={{
                    transform: [{
                        translateY: value.moto.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -10]
                        })
                    }],
                    opacity: value.moto.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1]
                    }),
                }} >
                    <ViewIcon selected={selected.moto} onPress={() => handleSelectType(2)}>
                        <Icon name="motorcycle" size={30} color={selected.moto ? "#008B8B" : "#333"} />
                    </ViewIcon>
                </AnimationContainer>

                <AnimationContainer style={{
                    transform: [{
                        translateY: value.truck.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -10]
                        })
                    }],
                    opacity: value.truck.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1]
                    }),
                }} >
                    <ViewIcon selected={selected.truck} onPress={() => handleSelectType(3)}>
                        <Icon name="truck" size={30} color={selected.truck ? "#008B8B" : "#333"} />
                    </ViewIcon>
                </AnimationContainer>
            </Row>

            <ViewSelect>
                <Label selected={selectMark !== ""}>Marca</Label>
                <Select style={{ borderRadius: 4 }} enabled={selected.car || selected.moto || selected.truck} onValueChange={(itemValue) => {
                    setSelectMark(itemValue);
                    setSelectModelo('');
                    if (itemValue !== '') getModelos(itemValue, selected.car ? "carros" : selected.moto ? "motos" : selected.truck ? "caminhoes" : "");
                    if (detail && detail.id) resetDetail();
                }} selectedValue={selectMark}>
                    <Select.Item value={""} label="Selecione uma marca" />
                    <ItemSelect type={selected.car ? 1 : selected.moto ? 2 : selected.truck ? 3 : 0} />
                </Select>


                <Label selected={selectModelo !== ""}>Modelo</Label>
                <Select selectedValue={selectModelo} style={{ borderRadius: 4 }} enabled={selectMark !== ""} onValueChange={(itemValue) => {
                    setSelectModelo(itemValue);
                    setSelectAnoTipo('');
                    if (itemValue !== '') getDetails(selectMark, itemValue, selected.car ? "carros" : selected.moto ? "motos" : selected.truck ? "caminhoes" : "");
                    if (detail && detail.id) resetDetail();
                }} >
                    <Select.Item value="" label="Selecione o modelo" />
                    {selectMark !== "" && <ItemModelo />}
                </Select>

                <Label selected={selectAnoTipo !== ""}>Ano/Tipo</Label>
                <Select selectedValue={selectAnoTipo} style={{ borderRadius: 4 }} enabled={selectMark !== "" && selectModelo !== ""} onValueChange={(itemValue) => {
                    setSelectAnoTipo(itemValue);
                    if (itemValue !== '') getDetailComplete(selectMark, selectModelo, itemValue, selected.car ? "carros" : selected.moto ? "motos" : selected.truck ? "caminhoes" : "");
                    if (detail && detail.id) resetDetail();
                }} >
                    <Select.Item value="" label="Selecione o ano e o tipo" />
                    {selectMark !== "" && selectModelo !== "" && <ItemType />}
                </Select>
                <RowPure>
                    <Label selected={detail.name !== undefined}>Preço: </Label>
                    {
                        selectAnoTipo !== "" && !detail.name ? <ActivityIndicator color="#008B8B" collapsable/> : selectAnoTipo !== "" && detail.name ? <PriceLabel>{detail.preco}</PriceLabel> : null
                    }
                </RowPure>



            </ViewSelect>
        </Content>
    </Container >;
}

export default Home;