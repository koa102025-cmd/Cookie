import styles from "../styles/Cookie.module.css";
import { useState } from "react";

export default function Cookie() {
	const [point, setPoint] = useState(0);
	return (
		<section>
			<button
				className={styles.button}
				onClick={() => setPoint((prev) => prev + 1)}>
				<img src="cookie.png" alt="Image of a Cookie" className={styles.img} />
			</button>
			<p className={styles.score}>Score: {point}</p>
		</section>
	);
}
