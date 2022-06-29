import './Navbar.scss';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
        const points = document.querySelector('.tabs__list');
        const point = document.querySelectorAll('.tabs__item-link');

        function addActiveClass() {
            points.addEventListener('click', (e) => {
                if (e.target && e.target.classList.contains('tabs__item-link')) {
                    point.forEach(point => point.classList.remove('tabs__item-link_active'));

                    e.target.classList.add('tabs__item-link_active');
                }
            })
        }
        addActiveClass()
        points.removeEventListener('click', addActiveClass)
    })

    return (
        <div className="_container">
            <nav className="tabs">
                <ul className="tabs__list">
                    <li className="tabs__item"><Link to={'/'} className="tabs__item-link tabs__item-link_active">Show All</Link></li>
                    <li className="tabs__item"><Link to={'/design'} className="tabs__item-link">Design</Link></li>
                    <li className="tabs__item"><Link to={'/branding'} className="tabs__item-link">Branding</Link></li>
                    <li className="tabs__item"><Link to={'/illustration'} className="tabs__item-link">Illustration</Link></li>
                    <li className="tabs__item"><Link to={'/motion'} className="tabs__item-link">Motion</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;