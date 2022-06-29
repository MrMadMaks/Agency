import './Card.scss';

const Card = ({ img, mob, category, name }) => {
    return (
        <div className="card">
            <picture>
                <source srcSet={img} media="(min-width: 1040px)" />
                <source srcSet={mob} media="(max-width: 1040px)" />
                <img src={img} alt="card" className="card__img" />
            </picture>
            <a href="." className="card__link">{category}</a>
            <div className="card__name">{name}</div>
        </div>
    )
}

export default Card;