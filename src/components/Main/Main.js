import './Main.css';
import Header from '../Header/Header';
import NewsList from '../NewsList/NewsList';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <main className="main">
        <Header></Header>
        <NewsList heading="Новости Слуцка"></NewsList>
        <Footer></Footer>
    </main>
  );
}

export default Main;
