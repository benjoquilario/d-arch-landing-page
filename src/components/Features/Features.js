import React from 'react';
import { css } from 'styled-components/macro';
import {
   FeaturesSection,
   FeaturesContainer,
   FeaturesContent,
   FeaturesHeading,
   FeaturesItem,
   FeaturesLink,
   FeaturesText,
} from './FeaturesStyle';
import { Button } from '../Button';
import { featuresData } from '../../assets';

const Features = () => {
   return (
      <FeaturesSection>
         <FeaturesContainer>
            <FeaturesHeading>
               <h3>Featured</h3>
               <Button primary="true">See all</Button>
            </FeaturesHeading>
            <FeaturesContent>
               {featuresData.map((feature, index) => {
                  return (
                     <FeaturesItem key={index}>
                        <FeaturesLink
                           css={`
                              background-image: url(${feature.image});
                           `}
                        >
                           <FeaturesText>
                              <h4>{feature.title}</h4>
                              <a href="/">{feature.label}</a>
                           </FeaturesText>
                        </FeaturesLink>
                     </FeaturesItem>
                  );
               })}
            </FeaturesContent>
         </FeaturesContainer>
      </FeaturesSection>
   );
};

export default Features;
