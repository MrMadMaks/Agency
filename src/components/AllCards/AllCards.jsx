import './AllCards.scss';
import Card from '../Card/Card';
import { useEffect } from 'react';

const AllCards = ({ events }) => {

    useEffect(() => {
        const points = document.querySelector('.cards');
        const point = document.querySelectorAll('.card__img');


        function addActiveClass() {
            points.addEventListener('click', (e) => {
                if (e.target && e.target.classList.contains('card__img')) {
                    point.forEach(point => point.classList.remove('card_active'));
                    e.target.classList.add('card_active');
                }
            })
        }
        addActiveClass()
        points.removeEventListener('click', addActiveClass)
    })

    const renderCards = () => {
        return events.map(event => <Card {...event} key={event.id} />)
    }

    return (
        <div className="_container">
            <div className="cards">
                {renderCards()}
            </div>
        </div>
    )
}

export default AllCards;