import React from 'react';
import styled, { css } from 'styled-components'

const outlined = css`
    border: 2px solid ${props => props.color ? props.color : '#000000'};
`;

const StyledA = styled.button`
    width: ${props => props.width ? props.width : '150px'};
    height: 40px;
    display: grid;
    place-content: center;
    margin: 1.4em 0.5em;
    outline:none;
    color:${props => props.color ? props.color : '#FAF2F2'};
    background: ${props => props.bg ? props.bg : '#000000'};
    ${props => props.outlined ? outlined : null}
    position:relative;
    z-index:1;
    cursor:pointer;

    &:hover{
        color:${props => props.bg ? props.bg : '#000000'};
    }
    &::before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:0;
        height:100%;
        background:${props => props.color ? props.color : '#FAF2F2'};
        transition:0.5s ease-in-out;
        z-index:-1
    }
    &:hover::before{
        width:100%;
    }

    @media(max-width:500px){
        &{
            margin:0.5em;
            width:70vw;
        }
    }

`;



const Button = (props) => {

    return (
        <StyledA width={props.width} color={props.color} bg={props.bg} outlined={props.outlined}>
            {props.children}
        </StyledA>
    );
}

export default Button;