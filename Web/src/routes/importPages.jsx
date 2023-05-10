import { lazy } from 'react';

const HomePage = lazy(() => import('../page/Home/HomePage'));
const Services = lazy(()=> import('../page/Service/Services'))
const ServicesPost = lazy(()=> import ('../page/ServicesPost/ServicesPost'))
const Gallery = lazy(()=> import('../page/Gallery/Gallery'))
const ThankYou = lazy(()=> import('../page/ThankYou/ThankYou'))

export { HomePage, Services, ServicesPost, Gallery, ThankYou } 