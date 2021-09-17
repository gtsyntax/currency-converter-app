import React from 'react';
import {AmountInput, BaseCurrencyStyle, ConvertBtn, ConvertContainer, TargetCurrencyStyle} from '../styles/Converter.style';

class Converter extends React.Component {
    constructor() {
        super();

        this.state = {
            base: 'USD',
            target: 'EUR',
            amount: '1'
        }
    }

    onAmountChange = (event) => {
        this.setState({
            base: this.state.base,
            target: this.state.target,
            amount: event.target.value
        })
    }

    onBaseCurrencyChange = (event) => {
        this.setState({
            base: event.target.value,
            target: this.state.target,
            amount: this.state.amount
        })
    }

    onFinalCurrencyChange = (event) => {
        this.setState({
            base: this.state.base,
            target: event.target.value,
            amount: this.state.amount
        })
    }

    onFormSubmit = () => {
        this.props.onSubmit(this.state.amount, this.state.base, this.state.target)
    }

    // render method
    render() {
        return (
            <ConvertContainer>
                    <AmountInput type="text" placeholder="Enter amount here" onChange={this.onAmountChange}/>

                    <BaseCurrencyStyle onChange={this.onBaseCurrencyChange}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="TRY">TRY</option>
                        <option value="ALL">ALL</option>
                        <option value="AOA">AOA</option>
                        <option value="AUD">AUD</option>
                        <option value="BHD">BHD</option>
                        <option value="CAD">CAD</option>
                        <option value="DKK">DKK</option>
                        <option value="CZK">CZK</option>
                        <option value="NGN">NGN</option>
                    </BaseCurrencyStyle>

                    <TargetCurrencyStyle onChange={this.onFinalCurrencyChange}>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="TRY">TRY</option>
                        <option value="ALL">ALL</option>
                        <option value="AOA">AOA</option>
                        <option value="AUD">AUD</option>
                        <option value="BHD">BHD</option>
                        <option value="CAD">CAD</option>
                        <option value="DKK">DKK</option>
                        <option value="CZK">CZK</option>
                        <option value="NGN">NGN</option>
                    </TargetCurrencyStyle>



                    <ConvertBtn type="button" value="Convert" onClick={this.onFormSubmit}/>

                
            </ConvertContainer>
        )
    }
}

export default Converter;