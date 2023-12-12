import { Link } from 'react-router-dom';
import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`

background-color: #FFF;
display: grid;
grid-template-columns: repeat(3, 1fr);
height: 100px;
position: fixed;
width: 100%;
align-items: center;
text-align:center;
 
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-decoration: none;
    }

`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header