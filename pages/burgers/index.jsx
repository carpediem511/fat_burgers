export const getStaticProps = async () => {

	const result = await fetch('http://localhost:5000/items')
	const data = await result.json()

	return {
		props: { burgers: data }
	}
}

const Burgers = (props) => {
	console.log('props-', props)
	return (
		<>
			<h1>Наши бургеры</h1>
		</>
	)
}

export default Burgers