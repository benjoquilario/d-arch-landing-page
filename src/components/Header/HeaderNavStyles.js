import styled, { css } from 'styled-components/macro';

const Nav = styled.nav``;

const HeaderMain = styled.header`
   left: 0;
   padding: 40px 32px 16px;
   position: absolute;
   width: 100%;
   z-index: 100;
`;

const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const HeaderMenu = styled.div`
   @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      height: 100vh;
      justify-items: center;
      align-items: center;
      left: 0;
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      padding: 0 35px;
      position: absolute;
      top: 0;
      transition: all 0.35s ease-out;
      visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
      width: 100%;
      z-index: 5;
      background: #cd853f;
   }
`;

const ButtonToggle = styled.button`
   background: transparent;
   outline: none;
   border: none;
   align-items: flex-end;
   background-color: transparent;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 0;
   transition: all 0.3s ease-in-out;
   z-index: 10;

   @media screen and (min-width: 769px) {
      display: none;
   }
`;

const ButtonBars = styled.span`
   background-color: #ffffff;
   display: block;
   height: 0.15rem;
   transition-duration: 0.2s;
   transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
   width: 1.325rem;
   z-index: 10;
   cursor: pointer;

   &:nth-of-type(1) {
      width: 0.825rem;
   }

   &:nth-of-type(2) {
      width: 1.624rem;
   }

   &:not(:last-of-type) {
      margin-bottom: 0.225rem;
   }
`;

const HeaderBtn = styled.div`
   @media screen and (max-width: 768px) {
      display: none;
   }
`;

const HeaderList = styled.ul`
   display: grid;
   grid-template-rows: repeat(3, 100px);
   align-items: flex-end;

   @media screen and (min-width: 769px) {
      grid-template-columns: repeat(3, 110px);
      grid-template-rows: auto;
   }
`;

const HeaderItem = styled.li`
   color: #fff;
   text-align: center;
   font-weight: 400;
   font-size: 20px;

   @media screen and (min-width: 769px) {
      font-size: 16px;
   }
`;

const navLink = css`
   color: #fff;
   display: flex;
   align-items: center;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
`;

const Logo = styled.a`
   ${navLink}
   font-size: 24px;
   font-style: italic;
   z-index: 1;
`;

export {
   Nav,
   HeaderMain,
   HeaderContainer,
   HeaderMenu,
   HeaderList,
   HeaderItem,
   HeaderBtn,
   Logo,
   ButtonToggle,
   ButtonBars,
};
