import './NewsItem.css';

function NewsItem({image, heading, date, title, link}) {
  return (
    <div className="news-item">
        <div className="news-item__top">
            <img className="news-item__image" src={image} alt="img"></img>
        </div>
        <div className="news-item__bottom">
            <h2 className="news-item__heading">{heading}</h2>
            <p className="news-item__date">{date}</p>
            <p className="news-item__title">{title}</p>
        </div>
        <span className="news-item__line"></span>
    </div>
  );
}

export default NewsItem;
