import styled from "styled-components"

const Input = styled.input`
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #FFF;
        text-align: center; /* Optional: Align the placeholder text to the center */
    }

    @media (max-width: 600px) {
        width: 60%;
        padding: 20px;
    }
`;

export default Input