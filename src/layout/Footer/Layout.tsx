import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export function Layout() {

	return <div className={styles['layout']}>
		<div className={styles['content']}>
			<Outlet />
		</div>
		<footer className={styles['footer']}>
			<p>API</p>
			<p>Desktop app</p>
			<p>ИП “SOON”</p>
		</footer>
		
	</div>;
}