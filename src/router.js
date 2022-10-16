import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Footer from 'components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from 'components/Page';

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Page />}>
					<Route index element={<Home />} />
					<Route path='menu' element={<Menu />} />
				</Route>
			</Routes>			
			<Footer />
		</Router>
	);
};

export default AppRouter;