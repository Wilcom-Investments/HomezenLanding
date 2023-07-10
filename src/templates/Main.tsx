import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  // eslint-disable-next-line tailwindcss/no-custom-classname
  <div
    className={`w-full bg-background-300 bg-[url('/assets/images/landing-background.jpg')] bg-cover bg-bottom text-white antialiased bg-blend-multiply`}
  >
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      {/* <header className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </h1>
          <h2 className="text-xl">{AppConfig.description}</h2>
        </div>
      </header> */}

      <main className="text-xl">{props.children}</main>

      {/* <footer className="py-8 text-sm text-center border-t border-gray-300">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>. */}
      {/*
       * PLEASE READ THIS SECTION
       * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
       */}
      {/* </footer> */}
    </div>
  </div>
);

export { Main };
