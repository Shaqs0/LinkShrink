import styles from './Input.module.css';

export function Input() {

	return <div>
		<div className={styles['input_container']}>
			<input className= {styles['input']} placeholder='Введите ссылку, которую нужно сократить'></input>
		</div>
	</div>;
}