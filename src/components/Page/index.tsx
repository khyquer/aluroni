import Navigator from 'components/Navigator';
import Header from 'components/Header';
import {Outlet} from 'react-router-dom';

const Page = () => {
	return (
		<>
			<Navigator />			
			<Header title="A casa do código e da Massa" />
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default Page;