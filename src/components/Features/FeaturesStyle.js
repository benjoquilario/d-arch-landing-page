import styled from 'styled-components';

const FeaturesSection = styled.section``;

const FeaturesContainer = styled.div`
   padding: 100px 40px;
   z-index: 1;

   @media screen and (max-width: 768px) {
      padding: 100px 28px;
   }
`;

const FeaturesContent = styled.div`
   display: flex;
   margin-top: 40px;
   gap: 24px;

   @media screen and (max-width: 688px) {
      flex-direction: column;
   }
`;

const FeaturesHeading = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   h3 {
      font-size: clamp(24px, 4vw, 30px);
   }
`;

const FeaturesItem = styled.div`
   position: relative;
   display: flex;
   align-items: flex-end;
   height: 520px;
   width: 100%;

   @media screen and (max-width: 768px) {
      height: 390px;
   }
`;

const FeaturesLink = styled.div`
   display: block;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
   z-index: 5;
   outline: none;
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: -1;
   }
`;

const FeaturesText = styled.div`
   position: absolute;
   left: 10px;
   bottom: 25px;
   width: 100%;
   color: #ffffff;

   h4 {
      font-size: 24px;
   }
`;

export {
   FeaturesSection,
   FeaturesContainer,
   FeaturesContent,
   FeaturesItem,
   FeaturesHeading,
   FeaturesLink,
   FeaturesText,
};
