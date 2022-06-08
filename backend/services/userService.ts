import userModel from '../models/userModel';
import { IUser, User } from '../interfaces/IUSER';

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
    const newUser: User = await userModel.create(user);

    return newUser;
}

const getAll = async () => {
    const users = await userModel.getAll();

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
