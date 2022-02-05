import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as ArrowRight } from '../../assets/img/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../assets/img/arrow-left.svg';
import { Button } from '../Button';
import {
   HeroContainer,
   HeroSection,
   HeroSlide,
   HeroSlider,
   HeroImage,
   HeroContent,
   HeroSliderButton,
   SliderButton,
} from './HeroStyle';

const Hero = ({ slides }) => {
   const [currIndex, setCurrIndex] = useState(0);
   const currSlide = slides.length;
   const timeout = useRef(null);

   useEffect(() => {
      const nextSlide = () =>
         setCurrIndex(currIndex === currSlide - 1 ? 0 : currIndex + 1);

      const prevSlide = () =>
         setCurrIndex(currIndex === 0 ? currSlide - 1 : currIndex - 1);

      timeout.current = setTimeout(nextSlide, 3000);

      const eventKey = event => {
         if (event.key === 'a' || event.key === 'ArrowLeft') {
            prevSlide();
         }
         if (event.key === 'd' || event.key === 'ArrowRight') {
            nextSlide();
         }
      };

      document.addEventListener('keydown', eventKey);

      return () => {
         document.removeEventListener('keydown', eventKey);
         if (timeout.current) return clearTimeout(timeout.current);
      };
   }, [currIndex, currSlide]);

   const nextSlide = () =>
      setCurrIndex(currIndex === currSlide - 1 ? 0 : currIndex + 1);

   const prevSlide = () =>
      setCurrIndex(currIndex === 0 ? currSlide - 1 : currIndex - 1);

   if (!Array.isArray(slides) || slides.length <= 0) return null;

   return (
      <HeroSection>
         <HeroContainer>
            {slides.map((slide, index) => {
               if (currIndex === index) {
                  return (
                     <HeroSlide key={index}>
                        <HeroSlider>
                           <HeroImage src={slide.image} />
                           <HeroContent>
                              <h1>{slide.title}</h1>
                              <p>{slide.price}</p>
                              <Button
                                 primary="true"
                                 css={`
                                    max-width: 200px;
                                    padding: 14px 15px;
                                 `}
                              >
                                 {slide.label}
                                 <ArrowRight
                                    css={`
                                       margin-left: 12px;
                                       fill: #fff;
                                    `}
                                 />
                              </Button>
                           </HeroContent>
                        </HeroSlider>
                     </HeroSlide>
                  );
               }
            })}
            <HeroSliderButton>
               <SliderButton onClick={prevSlide} primary="true">
                  <ArrowLeft />
               </SliderButton>
               <SliderButton onClick={nextSlide} primary="true">
                  <ArrowRight />
               </SliderButton>
            </HeroSliderButton>
         </HeroContainer>
      </HeroSection>
   );
};

export default Hero;
