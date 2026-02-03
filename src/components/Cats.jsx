import { useState, useEffect } from "react";
import styles from "../styles/Cats.module.css";
const Cats = () => {
	const [facts, setFacts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchFacts = async () => {
			try {
				setLoading(true);
				const response = await fetch("https://catfact.ninja/facts?limit=5");

				if (!response.ok) {
					throw new Error("Error!");
				}

				const data = await response.json();
				setFacts(data.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchFacts();
	}, []);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Cat Facts</h2>
			<ul>
				{facts.map((item, index) => (
					<li key={index} className={styles.listItem}>
						{item.fact}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Cats;
