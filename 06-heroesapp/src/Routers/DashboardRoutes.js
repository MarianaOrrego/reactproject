import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar'
import { DcScreen } from '../components/DC/DcScreen';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/Search/SearchScreen';
import { HeroeScreen } from '../components/Heroe/HeroeScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<MarvelScreen />} />
                    <Route path='marvel' element={<MarvelScreen />} />
                    <Route path='dc' element={<DcScreen />} />
                    <Route path='search' element={<SearchScreen />} />
                    <Route path='heroe/:heroeId' element={<HeroeScreen />} />
                </Routes>
            </div>
        </>
    )
}