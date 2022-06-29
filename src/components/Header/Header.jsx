import logo from '../../logo.png';
import '../Header/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="_container">
                <div className="header__menu">
                    <a href="." className="header__link">
                        <div className="header__logo">
                            <img src={logo} alt="logo" className="header__logo-img" />
                            <h4 className="header__logo-name">Agency</h4>
                        </div>
                    </a>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__list-item"><a href=".">About</a></li>
                            <li className="header__list-item"><a href=".">Services</a></li>
                            <li className="header__list-item"><a href=".">Pricing</a></li>
                            <li className="header__list-item"><a href=".">Blog</a></li>
                        </ul>
                    </nav>
                    <button type='button' className="header__btn">contact</button>
                </div>
                <h1 className="header__title">Portfolio</h1>
                <div className="header__descr">
                    Agency provides a full service range including technical skills, design, business understanding.
                </div>
            </div>
        </header>
    )
}

export default Header;