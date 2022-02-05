import ImageOne from '../assets/img/ImageOne.jfif';
import ImageTwo from '../assets/img/ImageTwo.jfif';
import ImageThree from '../assets/img/ImageThree.jfif';
import ImageNine from '../assets/img/ImageNine.jfif';

import ImageSix from '../assets/img/ImageSix.jfif';
import ImageSeven from '../assets/img/ImageSeven.jfif';
import ImageEight from '../assets/img/ImageEight.jfif';

const menuData = [
   {
      title: 'Portfolio',
      link: '/portfolio',
   },
   {
      title: 'About Us',
      link: '/about',
   },
   {
      title: 'Contact',
      link: '/Contact',
   },
];

const sliderData = [
   {
      title: 'Toronto, Canada',
      price: 'Project made for an art museum near Toronto, Canada. Project Paramour is a statement of bold, modern architecture.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: ImageOne,
      alt: 'Building',
   },
   {
      title: 'Lac du Salagou, France',
      price: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: ImageTwo,
      alt: 'Building',
   },
   {
      title: 'Batu, Batu City, East Java, Indonesia',
      price: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: ImageThree,
      alt: 'Building',
   },

   {
      title: 'Makati City, Philippines',
      price: 'D-Arch challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
      path: '/portfolio',
      label: 'See Our Portfolio',
      image: ImageNine,
      alt: 'Building',
   },
];

const featuresData = [
   {
      title: 'Project Del Sol',
      label: 'View All Projects',
      image: ImageSix,
   },
   {
      title: '228B Tower',
      label: 'View All Projects',
      image: ImageSeven,
   },
   {
      title: 'Le Prototype',
      label: 'View All Projects',
      image: ImageEight,
   },
];

const footerNav = [
   {
      title: 'Porfolio',
   },
   {
      title: 'About',
   },
   {
      title: 'Countact',
   },
];

export { menuData, sliderData, featuresData, footerNav };
