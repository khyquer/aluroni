import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Navigator from 'components/Navigator';
import Header from 'components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppRouter = () => {
	return (
		<Router>
			<Navigator />			
			<Header title="A casa do código e da Massa" />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;