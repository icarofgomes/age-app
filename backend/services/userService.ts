import userModel from '../models/userModel';
import { IUser, User } from '../interfaces/IUSER';

const USER_CONNECTION_ERROR = new Error();
USER_CONNECTION_ERROR.message = '500-Server error';

const getAge = (birth: Date) => {
    const today = new Date();
    const birthDate = new Date(birth);

    let age = today.getFullYear() - birthDate.getFullYear();
    const mounth = today.getMonth() - birthDate.getMonth();
    if (mounth < 0 || (mounth === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

const create = async (user: IUser): Promise<User> => {
    const newUser: User | null = await userModel.create(user);

    if (!newUser) {
        throw USER_CONNECTION_ERROR;
    }

    return newUser;
}

const getAll = async () => {
    const users = await userModel.getAll();
    
    if (!users) {
        throw USER_CONNECTION_ERROR;
    }

    const usersWithAge = users.map((user) => {
        const age = getAge(user.birth);

        return {
            username: user.username,
            age: age,
        }
    })

    return usersWithAge;
}

export = {
    create,
    getAll,
}
