import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';

function Card({ dataCard, indexCard }) {
	const { title, author, img, description, ref, date } = dataCard;

	const simplifyWords = (text, maxWords) => {
		const words = text.split(/\s+/);

		const limitedWords = words.slice(0, maxWords).join(' ');

		return words.length > maxWords ? limitedWords + '...' : limitedWords;
	};

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src={img ?? ''}
					alt=""
					layout="responsive"
					objectFit="contain"
					width={0}
					height={0}
					style={{
						padding: '10px',
						background: 'white',
						borderRadius: '10px',
						// boxShadow:
						// 	'0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
					}}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				<div className={styles.author}>
					by {author} / {date}
				</div>
				<p className={styles.description}>{simplifyWords(description, 40)}</p>

				<button className={styles.button}> Read More </button>
			</div>
		</div>
	);
}

export default Card;
