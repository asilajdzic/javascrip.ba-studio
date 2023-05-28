import '@styles/globals.css';

import Provider from '@components/Provider';
import Nav from '@components/Nav';

const RootLayout = ({ children, session }) => {
	return (
		<html lang='en'>
			<head>
				<title>JavaScript.BA Studio</title>
				<link
					rel='icon'
					type='image/x-icon'
					href='/assets/images/favicon/js_logo.svg'
				></link>
			</head>
			<body>
				<Provider session={session}>
					<main className='app'>
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
