import styles from '../../styles/Burgers.module.css'
import Image from "next/image"
import dbData from '../../db.json'
/*
export const getStaticPaths = async () => {

	const result = await fetch('http://localhost:5000/items')
	const data = await result.json()

	const paths = data.map(burger => ({

		params: { id: burger.id }

	}))

	return {
		paths,
		fallback: false
	}
}*/

export const getStaticPaths = async () => {
	const paths = dbData.items.map(burger => ({
		params: { id: burger.id.toString() }
	}));

	return {
		paths,
		fallback: false
	};
};

/*export const getStaticProps = async (context) => {

	const id = context.params.id

	const result = await fetch(`http://localhost:5000/items/${id}`)
	const data = await result.json()

	return {
		props: { burger: data }
	}
}*/

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const burger = dbData.items.find(item => item.id === id);

	return {
		props: { burger }
	};
};

const Details = ({ burger }) => {
	return (
		<div className={styles.singleBurger}>
			<h1 className='my-6 font-semibold text-xl'>{burger.name}</h1>
			<div className={styles.imageContainer}>
				<Image
					src={`${burger.image}`}
					alt={`${burger.name}`}
					width="1000"
					height="1000"
					layout="responsive"
					objectFit="cover"
				/>
			</div>
			<div>
				<p className='mt-6'>{burger.desc}</p>
			</div>
		</div>
	);
}

export default Details