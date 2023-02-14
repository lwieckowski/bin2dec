import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 100%;
    margin-top: 7px;
    margin-bottom: 7px;
`;

const Label = styled.label`
    font-family: inherit;
    color: grey;
    font-size: 0.97rem;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 16.5px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    pointer-events: none;
    transition: all 0.2s ease;
`;

const Input = styled.input`
    letter-spacing: inherit;
    font: inherit;
    height: 56px;
    width: 100%;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
    padding: 16.5px 14px;
    box-sizing: border-box;
    &:focus {
        outline: none;
        border: 2px solid #1976D2;
    }
    &:not(${(props) => !props.value == ""}) + ${Label} {
        font-size: 12px;
        height: 12px;
        padding-left: 4px;
        padding-right: 4px;
        transform: translate(-4px, -50%);
        background-color: white;
    }
`;

const Output = styled(Input)`
    background-color: #E0E0E0;
    ${Label} {
        background-color: "#E0E0E0";
    }
    &:not(${(props) => !props.value == ""}) {
        padding-top: 32px;
    }
    &:not(${(props) => !props.value == ""}) + ${Label} {
        font-size: 12px;
        height: 12px;
        padding-left: 4px;
        padding-right: 4px;
        color: grey;
        background-color: #E0E0E0;
        transform: translate(-4px, 70%);
    }
`;

const Error = styled.small`
    color: #d32f2f;
    padding: 16.5px;
`;


export { Container, Input, Output, Label, Error };
