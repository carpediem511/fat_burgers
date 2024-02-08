import Head from "next/head";

const Reviews = ({ reviews }) => {

	return (
		<>
			<Head>
				<title>Жирные бургеры | Отзывы</title>
				<meta name="title" content="Жирные бургеры" />
			</Head>

			<div>
				<h1 className="my-6 font-semibold text-xl">Отзывы клиентов</h1>
				<div className="reviews">
					{!!reviews.length && reviews.slice(0, 20).map(comment => {
						return (
							<div key={comment.id} className="review">
								{comment.id} {' '}
								{`${comment.body.slice(0, 90)}...`}
							</div>
						)
					})}
				</div>
			</div>
		</>

	)
}

export async function getServerSideProps() {

	const response = await fetch('https://jsonplaceholder.typicode.com/comments')
	const data = await response.json()
	return {
		props: {
			reviews: data.slice(0, 20)
		}
	}
}

export default Reviews