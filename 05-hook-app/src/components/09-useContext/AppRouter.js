import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container mt-5">
                    <Routes>
                        <Route exact path="/" element={< HomeScreen />} />
                        <Route path="/about" element={< AboutScreen />} />
                        <Route path="/login" element={< LoginScreen />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}