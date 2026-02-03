import mockData from "../mockData";
import styles from "../styles/Users.module.css";
import { useState } from "react";

export default function Users() {
	const [userList, setUserList] = useState(mockData);
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");

	const addUser = () => {
		if (nameInput && emailInput) {
			const newUser = { username: nameInput, email: emailInput };
			setUserList([...userList, newUser]);
			setNameInput("");
			setEmailInput("");
		}
	};

	return (
		<section className={styles.users}>
			<ul>
				{userList.map((user) => (
					<li key={user.email} className={styles.person}>
						<span className={styles.username}>{user.username}</span>
						<span className={styles.email}>{user.email}</span>{" "}
					</li>
				))}
			</ul>
			<div className={styles.inputField}>
				<input
					className={styles.inputUsername}
					type="text"
					placeholder="Name"
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				/>
				<input
					className={styles.inputEmail}
					type="email"
					placeholder="Email"
					value={emailInput}
					onChange={(e) => setEmailInput(e.target.value)}
				/>
				<button onClick={addUser} className={styles.button}>
					+
				</button>
			</div>
		</section>
	);
}
