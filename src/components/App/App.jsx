
import AllCards from '../AllCards/AllCards';
import Header from '../Header/Header.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Design from '../Design/Design';
import Branding from '../Branding/Branding';
import Illustration from '../Illustration/Illustration';
import './App.scss';
import { Outlet, Route, Routes } from "react-router-dom";
import { events } from '../../mocks.js';
import Motion from '../Motion/Motion';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />} >
                <Route index element={<AllCards events={events} />} />
                <Route path={'design'} element={<Design events={events} />} />
                <Route path={'branding'} element={<Branding events={events} />} />
                <Route path={'illustration'} element={<Illustration events={events} />} />
                <Route path={'motion'} element={<Motion events={events} />} />
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <>
            <Header />
            <main className="main">
                <Navbar />
                <Outlet />
                <button type="button" className='main__btn'>load more</button>
            </main>
        </>
    )
}

export default App;
