import AllCards from '../AllCards/AllCards';

const Motion = ({ events }) => {
    const motionCards = () => {
        return events.filter(card => card.motion)
    }

    return (
        <AllCards events={motionCards()} />
    )
}

export default Motion;