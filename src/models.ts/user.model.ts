export interface NewUser {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export interface UserLoginSuccess {
    firstName: string,
    lastName: string
}

export interface UserCredentials {
    email: string,
    password: string
}