import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Navigator from 'components/Navigator';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AppRouter from 'router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<main>
			<Navigator />
			<Header title="A casa do código e da Massa" />
			<AppRouter />
			<Footer />
		</main>    
	</React.StrictMode>
);
