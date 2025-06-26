export interface Usersdata {
    _id:      string;
    username: string
    password: string;
    impagen:  string;
    tipo:     string;
    __v:      number
}

export type RequestLogin = Usersdata | false;