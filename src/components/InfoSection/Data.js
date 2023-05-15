import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';

export const aboutObj = {
  id: 'about',
  lightbg: false,
  lighttext: true,
  lightTextDesc: true,
  topLine: 'Title of the Company',
  headline: 'Sample headline goes here',
  description: 'Here we will place a detailed description of the service we are providing',
  buttonLabel: 'Get started',
  imgstart: false,
  img: svg1,
  alt: 'Car',
  dark: true,
  primary: true,
  darktext: false
};

export const discoverObj = {
  id: 'discover',
  lightbg: true,
  lighttext: false,
  lightTextDesc: false,
  topLine: 'Discover a lot of things',
  headline: 'Sample headline about discover goes here',
  description: 'Here we will place a detailed description of the service we are providing that you can discover here',
  buttonLabel: 'Motorrad Verkaufen',
  imgstart: true,
  img: svg2,
  alt: 'Car',
  dark: false,
  primary: false,
  darktext: true
};

export const signupObj = {
  id: 'signup',
  lightbg: true,
  lighttext: false,
  lightTextDesc: false,
  topLine: 'Create a new account',
  headline: 'Creating an account is extremely easy',
  description: 'Create a new account unless you already have one, and enjoy our offerings',
  buttonLabel: 'Get started',
  imgstart: false,
  img: svg3,
  alt: 'svg3',
  dark: false,
  primary: false,
  darktext: true
};
