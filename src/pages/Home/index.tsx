import React, { useState, useRef, useCallback } from 'react';
import { ListRenderItem, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useRequestsContext } from '../../context/DataServices/Requests';
import { MarcasCarros } from '../../context/Interfaces';
import { Container, Content, Input, Row, Select, ViewIcon, ViewSelect, AnimationContainer } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemSelect from '../../components/ItemSelect';
import { Animated } from 'react-native';

interface ValuesAnimated {
    car: Animated.Value;
    moto: Animated.Value;
    truck: Animated.Value;
}

const Home: React.FC = () => {
    const { marcasCarros } = useRequestsContext();
    const [selectMark, setSelectMark] = useState<any>('');

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

    const styles = () => {
        return
    }

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
    },[])

    const handleSelect = useCallback((type: number) => {
        animate(type);
        setSelected({
            car: type === 1 ? true : false,
            moto: type === 2 ? true : false,
            truck: type === 3 ? true : false,
        });
        setSelectMark('');
    },[]);
    const renderItem: ListRenderItem<MarcasCarros> = ({ item: marcas }) => {
        return <TouchableOpacity>
            <Text>{marcas.name}</Text>
        </TouchableOpacity>
    }
    return <Container>
        <Content>
            <Row>
                <AnimationContainer style={{
                    opacity: value.car.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1]
                    }),
                }} >
                    <ViewIcon selected={selected.car} onPress={() => handleSelect(1)}>
                        <Icon name="car-side" size={30} color={selected.car ? "#3b9adb" : "#333"} />
                    </ViewIcon>
                </AnimationContainer>

                <AnimationContainer style={{
                    transform: [{
                        rotate: value.moto.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 90]
                        })
                    }],
                    opacity: value.moto.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1]
                    }),
                }} >
                    <ViewIcon selected={selected.moto} onPress={() => handleSelect(2)}>
                        <Icon name="motorcycle" size={30} color={selected.moto ? "#3b9adb" : "#333"} />
                    </ViewIcon>
                </AnimationContainer>

                <AnimationContainer style={{
                    transform: [{
                        rotate: value.truck.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 90]
                        })
                    }],
                    opacity: value.truck.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1]
                    }),
                }} >
                    <ViewIcon selected={selected.truck} onPress={() => handleSelect(3)}>
                        <Icon name="truck" size={30} color={selected.truck ? "#3b9adb" : "#333"} />
                    </ViewIcon>
                </AnimationContainer>
            </Row>

            <ViewSelect>
                <Select onValueChange={(itemValue) => setSelectMark(itemValue)} >
                    <Select.Item value={""} label="Selecione uma marca" />
                    <ItemSelect type={selected.car ? 1 : selected.moto ? 2 : selected.truck ? 3 : 0} />
                </Select>


                <Select >
                    <Select.Item value="" label="Selecione o modelo" />
                </Select>
            </ViewSelect>
        </Content>
    </Container >;
}

export default Home;