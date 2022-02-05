import React, { useState, useEffect } from 'react';
import {
   InfoSection,
   InfoContainer,
   InfoContent,
   InfoImage,
} from './InfoStyle';
import { breakpoints } from '../../helper';
import { Button } from '../Button';

const Info = () => {
   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
   });

   return (
      <InfoSection>
         <InfoContainer>
            <InfoContent>
               <h2>Welcome to the D-Arch</h2>
               <p>
                  We have a unique network and skillset to help bring your
                  projects to life. Our small team of highly skilled individuals
                  combined with our large network put us in a strong position to
                  deliver exceptional results.
               </p>
               <p>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
               </p>
               <p>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
               </p>
               <Button primary="true">Learn More</Button>
            </InfoContent>
            {width >= breakpoints && <InfoImage />}
         </InfoContainer>
      </InfoSection>
   );
};

export default Info;
