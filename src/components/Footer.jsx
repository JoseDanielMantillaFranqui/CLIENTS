import styled from "styled-components";
import ImgFooter from './../assets/img/logo-footer.png'

const FooterContainer = styled.footer`
   background-color: #f8f9b3;
   border-top: 3px solid #a98d1da8; 
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterImg = styled.img`
    width: 20%;
    border-radius: 20px;
    box-shadow: 0 0 10px #95700b;
    

    &:hover {
        transform: scale(1.1);
        transition: 0.3s transform ease-in-out;
    }

    &:active {
        transform: rotate(360deg); 
        transition: transform 0.3s;
    }

    @media screen and (max-width:480px) {
        width: 70%;
    }
`

const Footer = () => {
    return <FooterContainer>
        <FooterImg src={ImgFooter} />
    </FooterContainer>
}

export default Footer