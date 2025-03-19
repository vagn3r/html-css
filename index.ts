class logIn{
	email: string;
	password: string;

	constructor(email: string, password: string){
		this.email = email;
		this.password = password;
	}

	admin(email: string, pass:string): Boolean{
		if(email === this.email && pass === this.password){
		return true;
		}else{
			return false;
		}
	}

	user(): Boolean{
		return false;
	}
}

const login = new logIn('user@email.com', 'pass123');
const adminLogin = login.admin('user@email.com', 'pass123');
console.log(adminLogin);