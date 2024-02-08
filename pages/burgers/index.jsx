import Link from "next/link"
import styles from '../../styles/Burgers.module.css'
import Image from "next/image"
import dbData from '../../db.json'

/*export const getStaticProps = async () => {

	const result = await fetch('http://localhost:5000/items')
	const data = await result.json()

	return {
		props: { burgers: data }
	}
}*/

const Burgers = (/*{ burgers }*/) => {

	return (
		<div>
			<h1 className="my-6 font-semibold text-xl">Наши бургеры</h1>
			{dbData.items.map(burger => {
				return (
					<Link href={`/burgers/${burger.id}`} key={burger.id}>
						<div className={styles.burgerCard}>
							<div className={styles.imageContainer}>
								<Image src={`${burger.image}`} alt={`${burger.name}`} width="1000" height="1000" layout="responsive" objectFit="cover" />
							</div>
							<div>
								<h3 className="font-semibold">{burger.name}</h3>
								<p>{burger.desc}</p>
							</div>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default Burgers