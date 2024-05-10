import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Input.module.css';

export function Input() {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleButtonClick = () => {

		console.log('Button clicked');
	};

	return <div>
		<div className={styles['input_container']}>
			<input type='text' value={inputValue} onChange={handleInputChange} className= {styles['input']} placeholder='Введите ссылку, которую нужно сократить'></input>
			<Button onClick={handleButtonClick} disabled={!inputValue} className={styles['btn']} appearence='small'>Сократить</Button>
		</div>
	</div>;
}