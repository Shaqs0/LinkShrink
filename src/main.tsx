import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Footer/Layout';
import { Error } from './pages/Error/Error';
import { MainPage } from './pages/MainPage/MainPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <MainPage/>
			},

			{
				path: '*',
				element: <Error/>
			}
		]
	},

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
