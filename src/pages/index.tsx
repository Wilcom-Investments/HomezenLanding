import LandingPage from '@/components/LandingPage';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="Homezen App" description="The new best property app" />
      }
    >
      <LandingPage />
    </Main>
  );
};

export default Index;
