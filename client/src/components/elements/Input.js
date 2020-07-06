import React from 'react';
import styled from 'styled-components';


const FormGroup = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.8em 0;
`;

const Label = styled.label`
    font-weight: bold;
`;

const StyledInput = styled.input`
    width:${props => props.width ? props.width : '100%'};
    outline: none;
    border: 1px solid var(--txt-dark);
    height: 34px;
    padding: 10px;
    background: var(--primary-bg);
`;

const Small = styled.small`
    color:red;
`;

const Input = (props) => {
    return (
        <FormGroup>
            <Label htmlFor={props.id}>{props.label}</Label>
            <StyledInput
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChangeHandler}
                id={props.id}
                width={props.width}
            />
            <Small>{props.error}</Small>
        </FormGroup>
    );
}

export default Input;