import Carousel from './components/Carousel.js';

const App = () => {
  const imgLanding = [
    {
      id: 1,
      name: 'proyecto 1',
      src: 'img/p1.jpg',
    },
    {
      id: 2,
      name: 'proyecto 2',
      src: 'img/p2.jpg',
    },
    {
      id: 3,
      name: 'proyecto 3',
      src: 'img/p3.jpg',
    },
    {
      id: 4,
      name: 'proyecto 4',
      src: 'img/p4.jpg',
    },
  ];

  return (
    <div>
      <h1>navbar</h1>
      <Carousel img={imgLanding} />
    </div>
  );
};

export default App;
