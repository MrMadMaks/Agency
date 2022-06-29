import AllCards from '../AllCards/AllCards';

const Illustration = ({ events }) => {
    const illustrationCards = () => {
        return events.filter(card => card.illustration)
    }

    return (
        <AllCards events={illustrationCards()} />
    )
}

export default Illustration;