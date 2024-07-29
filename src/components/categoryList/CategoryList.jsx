import React from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

// API Idea => There will be a path
// to get the Categories Option including the detail data for each category
// When creating category, user/admin will be able to choose any color for the background

const dataCategories = [
	{
		name: 'Coding',
		image: '/coding.png',
		ref: 'coding',
		bgColor: '#a399f2',
	},
	{
		name: 'Music',
		image: '/music.jpg',
		ref: 'music',
		bgColor: '#d1545e',
	},
	{
		name: 'Story',
		image: '/life.webp',
		ref: 'story',
		bgColor: '#87d97e',
	},
];

function CategoryList() {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Categories</h3>
			<div className={styles.categories}>
				{dataCategories.map((category) => (
					<Link
						className={styles.category}
						style={{ backgroundColor: category.bgColor ?? 'white' }}
						href={`/blog?category=${category.ref}`}
					>
						<Image
							src={category.image}
							alt=""
							width={40}
							height={40}
							className={styles.image}
						/>
						{category.name}
					</Link>
				))}
			</div>
		</div>
	);
}

export default CategoryList;
