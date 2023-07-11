/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { register } from 'swiper/element/bundle';

register();

const LandingPage = () => {
  const router = useRouter();
  const swiperElRef = useRef(null);

  // useEffect(() => {
  //   swiperElRef.current.addEventListener('progress', (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener('slidechange', (e) => {
  //     console.log('slide changed');
  //   });
  // }, []);

  return (
    <section className="flex flex-col px-5 py-10 lg:h-screen lg:flex-row lg:flex-wrap lg:items-center lg:pb-32">
      <div className="mx-auto flex h-full w-full max-w-[354px] flex-col items-center justify-center text-center lg:ml-16 lg:h-full lg:basis-1/2 lg:items-start lg:text-left xl:ml-32">
        <Image
          src={`${router.basePath}/assets/images/homezen-logo.png`}
          width={212}
          height={43}
          alt="Homezen"
          className="mx-auto mb-7 w-auto lg:ml-0 lg:mr-auto"
        />
        <h1 className="mb-3 text-5xl leading-tight">
          Property Data
          <br />
          Made Easy.
        </h1>
        <h2 className="mb-6 text-xl text-primary">Coming Soon!</h2>
        <hr className="mb-6 w-full text-white" />
        <p className="mb-6 text-xs">
          Sign up to our newsletter to receive updates on Homezen products and
          when they will be coming available.
        </p>

        <div className="-mx-5 mb-6 w-[calc(100%+2rem)] md:w-[200%] lg:mx-0 lg:hidden">
          <div className="w-full">
            <swiper-container
              ref={swiperElRef}
              pagination="false"
              effect="coverflow"
              grab-cursor="true"
              centered-slides="true"
              slides-per-view="auto"
              coverflow-effect-rotate="50"
              coverflow-effect-stretch="0"
              coverflow-effect-depth="100"
              coverflow-effect-modifier="1"
              coverflow-effect-slide-shadows="false"
            >
              <swiper-slide>
                <Image
                  priority
                  src={`${router.basePath}/assets/images/screen.png`}
                  width={283}
                  height={592}
                  alt="Screen 1"
                  className="mx-auto w-full"
                />
              </swiper-slide>
              <swiper-slide>
                <Image
                  priority
                  src={`${router.basePath}/assets/images/screen2.png`}
                  width={283}
                  height={592}
                  alt="Screen 2"
                  className="mx-auto w-full"
                />
              </swiper-slide>
              <swiper-slide>
                <Image
                  priority
                  src={`${router.basePath}/assets/images/screen3.png`}
                  width={283}
                  height={592}
                  alt="Screen 3"
                  className="mx-auto w-full"
                />
              </swiper-slide>
            </swiper-container>
          </div>
        </div>

        <div className="mb-10">
          <form className="flex flex-col gap-6 lg:flex-row">
            <input
              className="w-full rounded-[40px] border-none bg-transparent px-4 py-2 text-center text-xs text-primary outline outline-1 outline-primary transition-all hover:outline-2 focus:outline-4"
              type="text"
              placeholder="Email Address"
            />
            <button
              className="rounded-[40px] bg-primary px-4 py-2 text-center text-xs text-black outline outline-0 outline-black transition-all hover:outline-2 focus:outline-4"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="inline-flex h-5 items-center justify-start gap-6 lg:hidden">
          <div className="relative h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g stroke="#F4F5F4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.796 1.667H6.462a4.167 4.167 0 0 0-4.166 4.166v8.334a4.167 4.167 0 0 0 4.166 4.166h8.334a4.167 4.167 0 0 0 4.166-4.166V5.833a4.167 4.167 0 0 0-4.166-4.166Z" />
                <path d="M13.962 9.475a3.334 3.334 0 1 1-6.595.978 3.334 3.334 0 0 1 6.595-.978ZM15.212 5.417h.009" />
              </g>
            </svg>
          </div>
          <div className="relative h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                stroke="#F4F5F4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.629 1.667h-2.5a4.167 4.167 0 0 0-4.167 4.166v2.5h-2.5v3.334h2.5v6.666h3.334v-6.666h2.5l.833-3.334h-3.333v-2.5A.833.833 0 0 1 13.129 5h2.5V1.667Z"
              />
            </svg>
          </div>
          <div className="relative h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g clipPath="url(#a)">
                <path
                  stroke="#F4F5F4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.796 2.5a9.082 9.082 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.883 8.883 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.834a9.7 9.7 0 0 1-5.834 1.666c7.5 4.167 16.667 0 16.667-9.583 0-.232-.023-.464-.067-.692A6.433 6.433 0 0 0 19.796 2.5Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.629 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:basis-1/2">
        <div className="mr-16 flex w-full flex-row items-center gap-10">
          <img
            src={`${router.basePath}/assets/images/screen.png`}
            alt="Screen 1"
            className="mx-auto h-fit w-full max-w-[141px]"
          />
          <img
            src={`${router.basePath}/assets/images/screen2.png`}
            alt="Screen 2"
            className="mx-auto h-fit w-full max-w-[204px]"
          />
          <img
            src={`${router.basePath}/assets/images/screen3.png`}
            alt="Screen 3"
            className="mx-auto h-fit w-full max-w-[141px]"
          />
        </div>
      </div>
      <div className="mb-24 hidden basis-full justify-center lg:flex">
        <div className="hidden h-5 items-center justify-start gap-6 lg:inline-flex">
          <div className="relative h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g stroke="#F4F5F4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.796 1.667H6.462a4.167 4.167 0 0 0-4.166 4.166v8.334a4.167 4.167 0 0 0 4.166 4.166h8.334a4.167 4.167 0 0 0 4.166-4.166V5.833a4.167 4.167 0 0 0-4.166-4.166Z" />
                <path d="M13.962 9.475a3.334 3.334 0 1 1-6.595.978 3.334 3.334 0 0 1 6.595-.978ZM15.212 5.417h.009" />
              </g>
            </svg>
          </div>
          <div className="relative h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                stroke="#F4F5F4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.629 1.667h-2.5a4.167 4.167 0 0 0-4.167 4.166v2.5h-2.5v3.334h2.5v6.666h3.334v-6.666h2.5l.833-3.334h-3.333v-2.5A.833.833 0 0 1 13.129 5h2.5V1.667Z"
              />
            </svg>
          </div>
          <div className="relative h-5 w-5">
            <a
              href="https://twitter.com/homezen_uk"
              target="_blank"
              className="group text-white transition-all hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 20"
                className="transition-all group-hover:scale-125"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.796 2.5a9.082 9.082 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.883 8.883 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.834a9.7 9.7 0 0 1-5.834 1.666c7.5 4.167 16.667 0 16.667-9.583 0-.232-.023-.464-.067-.692A6.433 6.433 0 0 0 19.796 2.5Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="currentColor" d="M.629 0h20v20h-20z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
