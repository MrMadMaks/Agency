import AllCards from '../AllCards/AllCards';

const Branding = ({ events }) => {
    const brandingCards = () => {
        return events.filter(card => card.branding)
    }

    return (
        <AllCards events={brandingCards()} />
    )
}

export default Branding;