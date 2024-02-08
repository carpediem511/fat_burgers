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
					{reviews.map(comment => (
						<div key={comment.id} className="review">
							{comment.id} {' '}
							{comment.body.length > 90 ? `${comment.body.slice(0, 90)}...` : comment.body}
						</div>
					))}
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

export default Reviews;
