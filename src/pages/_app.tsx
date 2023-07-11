/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={spaceGrotesk.className}>
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
