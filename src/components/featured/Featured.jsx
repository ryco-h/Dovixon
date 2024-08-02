import Image from 'next/image';
import React from 'react';
import styles from './featured.module.css';
import Link from 'next/link';

function Featured() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				This website was made by learning{' '}
				<strong>
					<i>Next JS</i>
				</strong>
			</div>
			<div className={styles.titleSmall}>
				Video Course by{' '}
				<Link
					className={styles.specialText}
					href={'https://youtu.be/DpYE5zPDRVQ'}
					style={{
						textDecoration: 'underline',
					}}
				>
					Lama Dev
				</Link>
			</div>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image
						src={'/lop.jpg'}
						alt="Image"
						layout="fill"
						objectFit="cover"
						sizes="100vw"
						style={{ borderRadius: '20px' }}
					/>
				</div>
				<div className={styles.textContainer}>
					<h2 className={styles.postTitle}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h2>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque at massa tristique, ornare nibh vel, posuere est. Cras
						mauris ipsum, condimentum vitae pellentesque et, pretium in est.
						Morbi condimentum a leo ut placerat. Vestibulum cursus arcu dolor,
						id malesuada nisl varius et.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
}

export default Featured;
