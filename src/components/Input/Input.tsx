import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Input.module.css';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';

export interface InputProps {
  onLinkGenerated: (link: string) => void;
}

export function Input(props: InputProps) {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleButtonClick = () => {
		axios.get(`${PREFIX}/new_url/?url=${inputValue}`)
			.then(function (response) {
				const generatedLink = response.data.result;
				props.onLinkGenerated(generatedLink);
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<div className={styles['input_container']}>
				<input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					className={styles['input']}
					placeholder='Введите ссылку, которую нужно сократить'
				/>
				<Button
					onClick={handleButtonClick}
					disabled={!inputValue}
					className={styles['btn']}
					appearence='small'
				>
          Сократить
				</Button>
			</div>
		</div>
	);
}
