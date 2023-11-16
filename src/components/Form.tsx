import { useState, FormEvent, ChangeEvent } from "react";

interface UserType {
  username: string;
  age: number;
}

const Form = () => {
	const [user, setUser] = useState<UserType | null>(null);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(user)
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={user?.username || ''}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setUser((prev) => ({ ...prev!, username: e.target.value }));
					}}
				/>
				<input
					type="number"
					value={user?.age || ''}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setUser((prev) => ({ ...prev!, age: Number(e.target.value) }));
					}}
				/>
				<button type="submit">Submit</button>
			</form>
			{/* <div>{user?.username}</div> */}
		</div>
	);
};

export default Form;
