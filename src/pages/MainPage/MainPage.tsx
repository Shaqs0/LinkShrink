import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLink } from '../../store/link.slice';
import { Input } from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './MainPage.module.css';
import copy from 'copy-to-clipboard';
import Swal from 'sweetalert2';
import { PREFIX } from '../../helpers/API';
import { Link } from 'react-router-dom';

export function MainPage() {
	const [generatedLink, setGeneratedLink] = useState('');
	const dispatch = useDispatch();

	const handleLinkGenerated = (link: string) => {
		setGeneratedLink(link);
		dispatch(setLink(link));
	};

	const handleCopyButtonClick = () => {
		const linkText = `${PREFIX}/${generatedLink}`;
		copy(linkText);
		Swal.fire({
			title: 'Скопировано!',
			showClass: {
				popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
			},
			hideClass: {
				popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
			}
		});
	};

	return (
		<div>
			<div className={styles['content']}>
				<div className={styles['text']}>
					<p className={styles['name']}>Linksshrink</p>
					<p className={styles['description']}>помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придется видеть длинные url-адреса, занимающие много места.</p>
				</div>
				<div className={styles['input']}>
					<Input onLinkGenerated={handleLinkGenerated}/>
				</div>
				<div className={styles['qr_box']}>
					<div className={styles['share']}>
						<img src='./public/link_icon.svg' className={styles['link_icon']}></img>
						<p>Linksshrink/{generatedLink || 'SOAPY-80333'}</p>
					</div>

					<div className={styles['btns']}>
						<Button appearence='small' className={styles['btn_copy']} onClick={handleCopyButtonClick}>Копировать</Button>
						<Button appearence='very_small'>
							<img src='public/share_icon.svg'></img>
						</Button>
						<Button appearence='very_small'>
							<Link to={'/preview'}>
								<img src='public/preview_icon.svg' alt="Preview" />
							</Link>
						</Button>
					</div>
					<div className={styles['info']}>
						<p>*ссылка активна в течении 1 дня с момента создания</p>
					</div>
					<div className={styles['qr']}>
						{generatedLink ? (
							<img src={`https://linksshrink.ru/${generatedLink}/qr-code`} alt="QR Code" />
						) : (
							<img src="public/qr-code.png" alt="Default QR Code" />
						)}
					</div>
				</div>
				<div className={styles['others']}>
					<p> Получите все возможности сервиса, такие как редактирование qr-code, статистика посещения сайтов, постоянная ссылка, и многое другое <Link to='https://linksshrink.ru/download_file/' className={styles['desktop_link']}>скачав desktop программу</Link></p>
				</div>
			</div>
		</div>
	);
}