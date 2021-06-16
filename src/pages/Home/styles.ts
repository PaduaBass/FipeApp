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
    background:	#323232;
    border-radius: 4px;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
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
    background: ${props => props.enabled ? "#eee" : "#999"};
    border-radius: 4px;
`;

export const ViewSelect = styled.View`
    width: 70%;  
    margin-top: 5px;

`;

export const Row = styled.View`
    width: 70%;
    flex-direction: row;
    justify-content: space-around;
`;

interface ViewIcon {
    selected?: boolean;
}

export const ViewIcon = styled.TouchableOpacity<ViewIcon>`
    width: 60px;
    height: 60px;
    border: 1px solid  ${props => props.selected ? "#008B8B" : "#333"};
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: #fff;

`;

export const AnimationContainer = styled(Animated.View)`
    height: 80px;
    
`;

interface LabelProps {
    selected?: boolean;
}
export const Label = styled.Text<LabelProps>`
    font-weight: bold;
    color: ${props => props.selected ? "#008B8B" : "#eee"};
`;

export const PriceLabel = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;

export const ViewTitle = styled.View`
    position: absolute;
    background: #008B8B;
    width: 100%;
    height: 50px;
    top: 0px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const Logo = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export const RowPure = styled.View`
    flex-direction: row;
`;