import React from 'react';
import {
   HeaderMain,
   HeaderContainer,
   Logo,
   HeaderBtn,
} from './HeaderNavStyles';
import HeaderNav from './HeaderNav';
import { Button } from '../Button';

const Header = () => {
   return (
      <HeaderMain>
         <HeaderContainer>
            <Logo>D-ARCH</Logo>
            <HeaderNav />
            <HeaderBtn>
               <Button primary="true">Contact us</Button>
            </HeaderBtn>
         </HeaderContainer>
      </HeaderMain>
   );
};

export default Header;
