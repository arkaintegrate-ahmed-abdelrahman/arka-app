import React from 'react';
import Header from './Header';

const Layout = ({children}) => {
	return (
		<div className="bg-[#f4f4f4]">
			<Header />
			{children}
		</div>
	);
};

export default Layout;