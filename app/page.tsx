import styles from "./page.module.css";
import Login from "@/components/Login/Login";

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<Login />
			</div>
		</main>
	);
}
