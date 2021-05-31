import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { Animated } from 'react-native';
export const Container = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    background: #999;
    border-radius: 4px;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 50%;
`;

export const Input = styled.TextInput`
    background: #ddd;
    height: 45px;
    width: 100%;
    border-radius: 4px;
    padding: 10px;

`;

export const Select = styled(Picker)`
    width: 100%;
    height: 45px;
    margin-bottom: 5px;
`;

export const ViewSelect = styled.View`
    width: 50%;  
    margin-top: 5px;

`;

export const Row = styled.View`
    width: 50%;
    flex-direction: row;
    justify-content: space-around;
`;

interface ViewIcon {
    selected?: boolean;
}

export const ViewIcon = styled.TouchableOpacity<ViewIcon>`
    width: ${props => props.selected ? "63px" : "60px"};
    height: ${props => props.selected ? "63px" : "60px"};
    border: 1px solid  ${props => props.selected ? "#3b9adb" : "#333"};
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.selected ? "31.5px" : "30px"};
    background: #ddd;

`;

export const AnimationContainer = styled(Animated.View)`
  

`;