import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
