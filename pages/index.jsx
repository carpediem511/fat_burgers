import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Header />
			<h1>Главная</h1>
			<Link href='/burgers'>Все бургеры</Link>
			<Footer />
		</>
	);
}
