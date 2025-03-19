class Users {
	id: number;
	name: string;
	lastname: string;
	email: string;
	status: boolean;
	constructor(id: number, name: string, lastname: string, email: string, status: boolean) {
		this.id = id;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.status = status;
	}
	addUser(id: number): number{
		console.log('User added: #'+id);
		return id;
	}
	editUser(id: number): number{
		console.log('User edited: #'+id);
		return id;

	}
	deleteUser(id: number): number{
		console.log('User deleted: #'+id);
		return id;
	}
}

const user = new Users(1, 'Thiergui', 'Nopinto', 'thiergui@rmail.com', true);
console.log(user);

user.addUser(1);

user.editUser(1);
user.deleteUser(1);