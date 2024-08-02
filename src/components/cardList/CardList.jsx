import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

const posts = [
	{
		title: 'Learning Docker',
		author: 'Jane Doe',
		img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
		description:
			"Docker has revolutionized the way we deploy and manage applications. In this comprehensive guide, we delve deep into the world of Docker, exploring its core concepts and practical applications. You will learn how to create, manage, and deploy Docker containers, understand Docker's architecture, and get hands-on experience with Docker Compose and Docker Swarm. This guide is designed for beginners who are just starting with Docker as well as experienced developers looking to deepen their understanding. By the end of this guide, you'll have a solid foundation in Docker and be ready to tackle real-world projects.",
		ref: 'https://example.com/posts/learning-docker',
		date: '2024-07-21',
	},
	{
		title: 'Mastering Python',
		author: 'John Smith',
		img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
		description:
			"Python is a versatile and powerful programming language used by developers worldwide for various applications. This advanced tutorial aims to elevate your Python skills to the next level. You will explore complex topics such as decorators, generators, context managers, and metaclasses. Additionally, you'll learn best practices for writing clean, efficient, and maintainable code. Whether you are developing web applications, data analysis tools, or automation scripts, mastering these advanced Python techniques will significantly improve your productivity and code quality. Join us as we unravel the intricacies of Python and unlock its full potential.",
		ref: 'https://example.com/posts/mastering-python',
		date: '2024-06-15',
	},
	{
		title: 'Introduction to Kubernetes',
		author: 'Alice Johnson',
		img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
		description:
			"Kubernetes is an open-source platform that automates the deployment, scaling, and management of containerized applications. This beginner's guide provides a thorough introduction to Kubernetes, covering its architecture, components, and basic operations. You will learn how to set up a Kubernetes cluster, deploy applications, and manage their lifecycle. Additionally, the guide includes practical exercises to reinforce your understanding and help you gain hands-on experience. Whether you're a developer, system administrator, or DevOps engineer, understanding Kubernetes is essential for modern cloud-native development. Start your Kubernetes journey with this comprehensive and accessible guide.",
		ref: 'https://example.com/posts/intro-to-kubernetes',
		date: '2024-05-10',
	},
	{
		title: 'JavaScript for Beginners',
		author: 'Bob Brown',
		img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
		description:
			"JavaScript is the backbone of modern web development, enabling dynamic and interactive user experiences. This beginner's guide to JavaScript covers all the essential concepts you need to start building web applications. From understanding variables, data types, and functions to manipulating the DOM and handling events, this guide provides a solid foundation. You'll also learn about modern JavaScript features like ES6+ syntax, promises, and async/await. With numerous examples and exercises, this guide ensures you get practical experience and build confidence in your coding skills. Start your journey into the world of JavaScript with this comprehensive introduction.",
		ref: 'https://example.com/posts/js-for-beginners',
		date: '2024-04-05',
	},
	{
		title: 'Advanced CSS Techniques',
		author: 'Carol White',
		img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
		description:
			"CSS is more than just a tool for styling web pages; it's a powerful language that can transform your web designs. This guide explores advanced CSS techniques that will take your skills to the next level. You will learn about CSS Grid, Flexbox, animations, transitions, and responsive design principles. Additionally, the guide covers modern CSS features like custom properties, media queries, and the latest specifications. By mastering these techniques, you can create sophisticated layouts and interactive user interfaces. Whether you're a seasoned web developer or a designer looking to enhance your toolkit, this guide is for you.",
		ref: 'https://example.com/posts/advanced-css',
		date: '2024-03-01',
	},
];

function CardList() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Recent Posts</h2>
			<div className={styles.posts}>
				{posts.map((post, index) => (
					<Card dataCard={post} indexCard={index} />
				))}
			</div>
			<Pagination />
		</div>
	);
}

export default CardList;
