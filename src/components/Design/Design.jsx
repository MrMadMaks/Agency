import AllCards from '../AllCards/AllCards';

const Design = ({ events }) => {
    const designCards = () => {
        return events.filter(card => card.design)
    }

    return (
        <AllCards events={designCards()} />
    )
}

export default Design;