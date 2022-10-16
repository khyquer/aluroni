import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Menu from './pages/Menu';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<main>
			<Header title="A casa do código e da Massa" />
			<Home />
			<Footer />
		</main>    
	</React.StrictMode>
);
