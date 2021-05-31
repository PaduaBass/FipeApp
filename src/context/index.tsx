import React from 'react';
import { View } from 'react-native';
import { RequestsProvider } from './DataServices/Requests';

// import { Container } from './styles';

const GlobalContext: React.FC = ({ children }) => {
    return <RequestsProvider>
        {children}
    </RequestsProvider>;
}

export default GlobalContext;
