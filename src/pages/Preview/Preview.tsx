import styles from './Preview.module.css';

export function Preview() {

	return <div>
		<div className={styles['logo']}> 
			<a href='/'><img src='public/logo_icon.svg'></img></a>
			<a href='/'><p className={styles['logo_name']}>Linksshrink</p></a>
		</div>
		<div className={styles['preview']}>
			<p className={styles['mod']}>Preview режим</p>
			<p className={styles['link']}>Linksshrink/{ 'SOAPY-80333'}</p>
			<div className={styles['qr']}>
				<img src="public/qr-code.png" alt="Default QR Code" />
			</div>
		</div>
        
	</div>;
}