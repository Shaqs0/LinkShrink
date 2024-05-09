import { Input } from '../../components/Input/Input';
import styles from './MainPage.module.css';

export function MainPage() {

	return <div>
		<div className={styles['content']}>
			<div className={styles['text']}>
				<p className={styles['name']}>LinkShrink</p>
				<p className={styles['description']}>помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придется видеть длинные url-адреса, занимающие много места.</p>
			</div>
			<div className={styles['input']}>
				<Input/>
			</div>
		</div>    
	</div>;
}