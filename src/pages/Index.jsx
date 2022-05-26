import Header from '../components/Common/Header';
import Hero from '../components/Home';

const Index = () => {
  return (
    <div className="relative">
      <main className="relative gradient-home left-0 right-0 flex flex-col items-center justify-center flex-1 text-center">
        <Header className="absolute" />
        <Hero />
      </main>
    </div>
  );
};

export default Index;
