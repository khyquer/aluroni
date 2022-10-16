import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Footer from 'components/Footer';
import AppRouter from 'router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<main>
			<AppRouter />
			<Footer />
		</main>    
	</React.StrictMode>
);
