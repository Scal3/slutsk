import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__ears">
            <div className="footer__top">
                <ul className="footer__link-list">
                    <li className="footer__link-item">
                        <a className="footer__link" href="https://vk.com/" target="_blank" rel="noreferrer">VK</a>
                    </li>
                    <li className="footer__link-item">
                        <a className="footer__link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                    </li>
                    <li className="footer__link-item">
                        <a className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                    </li>
                </ul>
            </div>
            <div className="footer__bottom">
                <p className="footer__copy">Herman Barodzich &copy;2021</p>
                <p className="footer__copy">Информационный сайт Слуцка Против херового дизайна нынешнего сайта</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
