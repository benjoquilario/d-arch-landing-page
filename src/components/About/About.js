import React from 'react';
import { AboutSection, AboutContainer, AboutContent } from './AboutStyle';
import { ReactComponent as ArrowRight } from '../../assets/img/arrow-right.svg';
import { Button } from '../Button';

const About = () => {
   return (
      <AboutSection>
         <AboutContainer>
            <AboutContent>
               <h3>Small team, big ideas</h3>
               <Button primary="true">
                  About Us <ArrowRight />
               </Button>
            </AboutContent>
         </AboutContainer>
      </AboutSection>
   );
};

export default About;
