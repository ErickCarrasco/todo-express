import {Document} from 'mongoose';

interface UserInterface extends Document{
    name: string;
    password: string;
    email: string;
    createdDate: Date;
}

export default UserInterface;