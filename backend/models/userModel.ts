import { ResultSetHeader } from 'mysql2';

import connection from './connection';

import { IUser, User } from '../interfaces/IUSER';

const create = async (user: IUser): Promise<User | null> => {
    const { username, birth } = user;
    try {
        const [result] = await connection.execute<ResultSetHeader>(
            'INSERT INTO users(username, birth) VALUES (?, ?)',
            [username, birth],
        );
        const { insertId: id } = result;
    
        const insertedUser: User = { id, username, birth };
    
        return insertedUser;
    } catch (e) {
        return null;
    }
}

const getAll = async (): Promise<User[] | null> => {
    try {
        const [data] = await connection.execute(
            'SELECT * FROM users',
        )
        return data as User[];
    } catch (e) {
        return null;
    }
}

export = {
    create,
    getAll,
}
