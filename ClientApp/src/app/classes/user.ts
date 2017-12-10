export class User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export class LoginUser extends User {

}

export class RegisterUser extends User {
    confirmPassword: string;
}