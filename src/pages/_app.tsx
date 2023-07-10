/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';

import type { AppProps } from 'next/app';

// const neueMachina = localFont({
//   src: [
//     {
//       path: '../../public/fonts/NeueMachina-Light.otf',
//       weight: '300',
//       style: 'light',
//     },
//     {
//       path: '../../public/fonts/NeueMachina-Regular.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/NeueMachina-UltraBold.otf',
//       weight: '700',
//       style: 'bold',
//     },
//   ],
// });

// neueMachina.className

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />{' '}
    </div>
  );
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': SwiperProps;
      'swiper-slide': SwiperProps;
    }
  }
}

interface SwiperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  class?: string;
  children?: any;
  pagination?: string;
  effect?: string;
  'grab-cursor'?: string;
  'centered-slides'?: string;
  'slides-per-view'?: string;
  'coverflow-effect-rotate'?: string;
  'coverflow-effect-stretch'?: string;
  'coverflow-effect-depth'?: string;
  'coverflow-effect-modifier'?: string;
}

export default MyApp;
