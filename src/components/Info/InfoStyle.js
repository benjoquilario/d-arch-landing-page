import styled from 'styled-components';
import ImageFour from '../../assets/img/ImageFour.jfif';

const InfoSection = styled.section`
   padding: 124px 40px 140px;

   @media screen and (max-width: 768px) {
      padding: 100px 28px;
   }
`;

const InfoContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   max-width: 1600px;
   width: 100%;
`;

const InfoContent = styled.div`
   text-align: left;
   margin-right: 54px;
   flex: 1 0 55%;

   @media screen and (max-width: 768px) {
      margin-right: 0;
   }

   h2 {
      font-size: 42px;
      margin-bottom: 12px;
   }

   p {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 14px;
      max-width: 556px;
      color: #60636c;
   }
`;

const InfoImage = styled.div`
   position: relative;
   background-image: url(${ImageFour});
   background-size: 100%;
   background-repeat: no-repeat;
   background-position: center;
   width: 100%;
   height: 80vw;
   max-width: 600px;
   max-height: 526px;
   margin: 0 auto;
`;

export { InfoSection, InfoContainer, InfoContent, InfoImage };
