import React from 'react';
import axios from 'axios';
import Converter from './Converter';
import Display from './Display';

import { AppContainer, Title } from '../styles/App.style';

class App extends React.Component {
    state = {
        amount: '',
        base: '',
        target: '',
        rate: '',
        result: ''
    }

    onSubmit = async (amount, base, target) => {
        const response =  await axios
        .get(`https://v6.exchangerate-api.com/v6/api-key/pair/${base}/${target}/${amount}`, {});

        this.setState({
            amount: amount,
            base: base,
            target: target,
            rate: response.data.conversion_rate,
            result: response.data.conversion_result
        })
    }

    render() {
        return (
            <AppContainer>
                <Title>Currency Converter</Title>
                <Converter onSubmit={this.onSubmit}/>
                <Display 
                    amount={this.state.amount}
                    base={this.state.base}
                    target={this.state.target}
                    rate={this.state.rate}
                    result={this.state.result}
                />
            </AppContainer>
        )
    }
}

export default App;