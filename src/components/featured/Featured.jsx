import Image from 'next/image';
import React from 'react';
import styles from './featured.module.css';
import Link from 'next/link';

function Featured() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>Just a Website to learn Next JS</div>
			<div className={styles.titleSmall}>
				Video Course by{' '}
				<Link
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
						layout="fill"
						objectFit="cover"
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
