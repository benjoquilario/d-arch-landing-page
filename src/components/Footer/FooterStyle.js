import styled from 'styled-components';

const FooterMain = styled.footer`
   background-color: #000d1a;
   padding: 54px 82px;
`;

const FooterContainer = styled.div`
   grid-gap: 20px;
   color: var(--white);
   display: grid;
   grid-template-columns: 1fr;
   justify-items: center;
   align-items: center;

   @media screen and (min-width: 768px) {
      grid-template-columns: 174px 1fr 80px;
      justify-items: flex-start;
   }
`;

const FooterLogo = styled.a``;

const FooterNav = styled.nav`
   ul {
      display: flex;
      flex-direction: column;
      gap: 29px;
      width: 100%;

      @media screen and (min-width: 768px) {
         flex-direction: row;
      }
   }
   li {
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      font-size: clamp(13px, 4vw, 15px);
   }
`;

const FooterSocial = styled.div`
   display: flex;
   align-center: center;
   gap: 20px;
   margin-top: 10px;
`;

export { FooterMain, FooterContainer, FooterLogo, FooterNav, FooterSocial };
