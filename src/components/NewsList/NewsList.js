import './NewsList.css';
import NewsItem from '../NewsItem/NewsItem';
import { useState, useEffect } from 'react';
import { testData } from '../../utils/testData';


function NewsList({heading}) {

    const [newsLimit, setNewsLimit] = useState(10)
    const [newsArr, setNewsArr] = useState([])


    // Устанавливаем массив новостей
    useEffect(() => {
        setNewsArr(testData)
    }, [])

    // Задаём отображение новостей по 10 штук
    const handleMoreButtonClick = () => {
        setNewsLimit(i => i + newsLimit)
    }
    

  return (
    <section className="news-list">
        <div className="news-list__ears">
            <h1 className="news-list__heading">{heading}</h1>
            {newsArr.map((item) => (
                    <NewsItem 
                        key={item.id} 
                        image={item.image} 
                        heading={item.heading} 
                        date={item.date} 
                        title={item.title}>
                    </NewsItem>
            )).slice(0, newsLimit)}
            <button className="news-list__button" onClick={handleMoreButtonClick}>Ещё новости</button>
        </div>
    </section>
  );
}

export default NewsList;
