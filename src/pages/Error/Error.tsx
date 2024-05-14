import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Error.module.css';

export function Error() {

	return (
		<div>
			<div className={styles['not_fnd']}>
				<p className={styles['name']}>LinkShrink</p>
				<p className={styles['error_code']}>404 Not Found</p>
			</div>
			<div className={styles['go_back']}>
				<p className={styles['error_info']}>Данная страница не найдена!</p>
				<Link to='/'><Button appearence='big' className={styles['btn']}>На главную</Button></Link>
			</div>

		</div>
	);
}
