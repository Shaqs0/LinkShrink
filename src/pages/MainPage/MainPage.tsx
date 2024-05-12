import { Input } from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './MainPage.module.css';

export function MainPage() {
	return (
		<div>
			<div className={styles['content']}>
				<div className={styles['text']}>
					<p className={styles['name']}>LinkShrink</p>
					<p className={styles['description']}>помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придется видеть длинные url-адреса, занимающие много места.</p>
				</div>
				<div className={styles['input']}>
					<Input/>
				</div>
				<div className={styles['qr_box']}>
					<div className={styles['share']}>
						<img src='./public/link_icon.svg' className={styles['link_icon']}></img>
						<p>LinkShrink/world-1234/</p>
					</div>

					<div className={styles['btns']}>
						<Button appearence='small' className={styles['btn_copy']}>Копировать</Button>
						<Button appearence='very_small'>
							<img src='public/share_icon.svg'></img>
						</Button>
						<Button appearence='very_small'>
							<img src='public/preview_icon.svg'></img>
						</Button>
					</div>
					<div className={styles['info']}>
						<p>*ссылка активна в течении 1 дня с момента создания</p>
					</div>
					<div className={styles['qr']}>
						<img src='qr-code.png'></img>
					</div>
				</div>
				<div className={styles['others']}>
					<p> Получите все возможности сервиса, такие как редактирование qr-code, статистика посещения сайтов, постоянная ссылка, и многое другое <a href='#' className={styles['desktop_link']}>скачав desktop программу</a></p>
				</div>
			</div>    
		</div>
	);}