import './Main.css';
import Navigation from '../Navigation/Navigation';
import SectionCards from '../SectionCards/SectionCards';
import Pagination from '../Pagination/Pagination';

function Main() {
  return (
    <main className='main'>
      <Navigation />
      <SectionCards />
      <Pagination />
    </main>
  );
}

export default Main;