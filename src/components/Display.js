import React from 'react';
import { DisplayContainer } from '../styles/Display.style';

const Display = (props) => {
    return (
        <DisplayContainer>
            <h1>{props.amount} {props.base} = {props.result} {props.target}</h1>
        </DisplayContainer>
    )
}

export default Display;