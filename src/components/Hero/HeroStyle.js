import styled from 'styled-components';

const HeroSection = styled.section`
   height: 100vh;
   max-height: 1100px;
   position: relative;
   overflow: hidden;
`;

const HeroContainer = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;
`;

const HeroSlide = styled.div`
   z-index: 1;
   width: 100%;
   height: 100%;
`;

const HeroSlider = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: 0.3s;

   &::before {
      content: '';
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100vh;
      bottom: 0vh;
      left: 0;
      overflow: hidden;
      opacity: 0.4;
      background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%
         ),
         rgba(0, 0, 0, 0.7) 100%;
   }
`;
const HeroImage = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   object-fit: cover;
`;

const HeroContent = styled.div`
   @keyframes headingSlide {
      0% {
         transform: translateY(-50px);
         opacity: 0;
      }

      100% {
         transform: translateY(0);
         opacity: 1;
      }
   }

   @keyframes paragraphSlide {
      0% {
         transform: translateX(-50px);
         opacity: 0;
      }

      100% {
         transform: translateY(0);
         opacity: 1;
      }
   }
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   max-width: 1600px;
   width: calc(100% - 100px);
   color: #fff;
   z-index: 2;

   h1 {
      font-size: clamp(1rem, 8vw, 2rem);
      font-weight: 400;
      text-transform: uppercase;
      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      text-align: left;
      margin-bottom: 0.8rem;
      animation: headingSlide 550ms ease-in-out;
   }

   p {
      margin-bottom: 1.2rem;
      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      max-width: 560px;
      line-height: 24px;
      animation: paragraphSlide 550ms ease-in-out;
   }
`;

const HeroSliderButton = styled.div`
   position: absolute;
   bottom: 50px;
   right: 50px;
   display: flex;
   z-index: 10;
`;

const SliderButton = styled.button`
   width: 50px;
   height: 50px;
   background: #000d1a;
   outline: none;
   border: none;
   transition: 350ms;

   user-select: none;
   cursor: pointer;
   border-radius: 50%;

   &:not(:last-of-type) {
      margin-right: 1rem;
   }
`;

export {
   HeroSection,
   HeroContainer,
   HeroSlide,
   HeroSlider,
   HeroImage,
   HeroContent,
   HeroSliderButton,
   SliderButton,
};
