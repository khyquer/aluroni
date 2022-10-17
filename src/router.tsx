import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Footer from 'components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from 'components/Page';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Dish from 'pages/Dish';

const AppRouter = () => {
	return (
		<main className='container'>
			<Router>
				<Routes>
					<Route path='/' element={<Page />}>
						<Route index element={<Home />} />
						<Route path='menu' element={<Menu />} />
						<Route path='sobre' element={<About />} />
						<Route path='/dish/:id' element={<Dish />} />
					</Route>					
					<Route path='*' element={<NotFound />} />					
					<Route path='404' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
};

export default AppRouter;