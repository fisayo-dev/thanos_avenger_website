import Features from '@/components/Features';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-[5rem]">
        <Landing />
        <Features />
        <Pricing />
      </div>
    </>
  );
}
