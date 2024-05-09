import Button from '../Button/Button';
import styles from './Input.module.css';

export function Input() {

	return <div>
		<div className={styles['input_container']}>
			<input className= {styles['input']} placeholder='Введите ссылку, которую нужно сократить'></input>
			<Button appearence='small'>Сократить</Button>
		</div>
	</div>;
}