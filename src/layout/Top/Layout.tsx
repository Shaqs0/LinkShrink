import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export function Layout() {

	return <div className={styles['layout']}>
		<header>
			<div className={styles['logo']}><img src='./public/stove_icon.svg'></img>Ovens Elite</div>
			<div className={styles['nav_items']}>
				<ul>
					<li><a href='#'>Home</a></li>
					<li><a href='#'>About</a></li>
					<li><a href='#'>Products</a></li>
					<li><a href='#'>Contact</a></li>
				</ul>
				<button>FAQ</button>
			</div>
		</header>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}