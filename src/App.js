import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	return (
		<ProductProvider>
			<div className='App'>
				<Navigation />

				{/* Routes */}
				<Route exact path='/'>
					<Products />
				</Route>

				<Route path='/cart'>
					<ShoppingCart />
				</Route>
			</div>
		</ProductProvider>
	);
}

export default App;
