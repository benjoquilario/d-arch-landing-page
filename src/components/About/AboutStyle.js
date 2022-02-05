import styled from 'styled-components';
import ImageFive from '../../assets/img/ImageFive.jfif';

const AboutSection = styled.section``;

const AboutContainer = styled.div`
   position: relative;
   padding: 0 40px;
   z-index: 1;

   @media screen and (max-width: 768px) {
      padding: 0px 28px;
   }
`;
const AboutContent = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   padding-left: 14%;
   background-image: url(${ImageFive});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   min-height: 370px;
   z-index: 1;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: -1;
   }

   h3 {
      font-size: 40px;
      margin-bottom: 0.9rem;
      color: #ffffff;
   }
`;

export { AboutSection, AboutContainer, AboutContent };
