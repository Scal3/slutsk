import './NewsList.css';
import NewsItem from '../NewsItem/NewsItem';

const date = new Date()
const realDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()

const testArr = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80', 
        heading: 'Test1', 
        date: realDate, 
        title: '20 ноября в Слуцке на улице Ленина, недалеко от дома № 213, паркетник «Мерседес Бенц» сбил 18-летнего парня на пешеходном переходе. С травмами ноги пострадавший был доставлен в больницу.', 
        link: ''
    },
    {
        id: 2, 
        image: 'https://media.gettyimages.com/photos/empty-pavement-with-modern-architecture-picture-id1207663571?s=612x612', 
        heading: 'Test2', 
        date: realDate, 
        title: '20 ноября в соединениях и воинских частях Вооруженных Сил Республики Беларусь проходят торжественные мероприятия, посвященные принятию военной присяги новым пополнением.', 
        link: ''
    },
    {
        id: 3, 
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80', 
        heading: 'Test3', 
        date: realDate, 
        title: 'По прибытии к месту вызова спасателей установлено, что идет дым из-под кровли. Пожар был локализован и ликвидирован работниками Слуцкого РОЧС.', 
        link: ''
    },
    {
        id: 4, 
        image: 'https://images.pexels.com/photos/1980720/pexels-photo-1980720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        heading: 'Test4', 
        date: realDate, 
        title: 'В Солигорске состоится открытый областной фестиваль команд КВН на кубок губернатора Минской области "Молодежный MIX".', 
        link: ''
    },
    {
        id: 5, 
        image: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        heading: 'Test5', 
        date: realDate, 
        title: 'ПСО «Ангел» 18 ноября начал розыск 34-летнего жителя деревни Маглыши Слуцкого района Андрея Хамени. Мужчина пропал еще в октябре, но в начале ноября его видели в Минске возле станции метро «Малиновка».', 
        link: ''
    }
]

function NewsList({heading}) {
  return (
    <section className="news-list">
        <div className="news-list__ears">
            <h1 className="news-list__heading">{heading}</h1>
            {testArr.map((item) => {
                return (
                    <NewsItem 
                        key={item.id} 
                        image={item.image} 
                        heading={item.heading} 
                        date={item.date} 
                        title={item.title}>
                    </NewsItem>
                )
            })}
        </div>
    </section>
  );
}

export default NewsList;
