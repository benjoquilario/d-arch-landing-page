import React, { useEffect, useState } from 'react';
import { menuData } from '../../assets';
import {
   Nav,
   HeaderMenu,
   HeaderList,
   HeaderItem,
   ButtonToggle,
   ButtonBars,
} from './HeaderNavStyles';
import { Button } from '../Button';
import { breakpoints } from '../../helper';

const HeaderNav = () => {
   const [width, setWidth] = useState(window.innerWidth);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
   });

   const mobileMenu = () => setIsOpen(!isOpen);

   return (
      <Nav>
         <ButtonToggle
            onClick={mobileMenu}
            aria-label="menu-toggle"
            aria-expanded={isOpen ? true : false}
         >
            <ButtonBars />
            <ButtonBars />
            <ButtonBars />
         </ButtonToggle>
         <HeaderMenu isOpen={isOpen}>
            <HeaderList>
               {menuData.map((item, index) => {
                  return (
                     <HeaderItem key={index} onClick={mobileMenu}>
                        <a href={`/${item.link}`}>{item.title}</a>
                     </HeaderItem>
                  );
               })}
            </HeaderList>
            {width <= breakpoints ? (
               <Button primary="true">Contact Us</Button>
            ) : null}
         </HeaderMenu>
      </Nav>
   );
};

export default HeaderNav;
