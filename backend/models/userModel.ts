import { ResultSetHeader } from 'mysql2';

import connection from './connection';

import { IUser, User } from '../interfaces/IUSER';

const create = async (user: IUser): Promise<User> => {
    const { username, birth } = user;
    const [result] = await connection.execute<ResultSetHeader>(
        'INSERT INTO users(username, birth) VALUES (?, ?)',
        [username, birth],
    );
    const { insertId: id } = result;

    const insertedUser: User = { id, username, birth };

    return insertedUser;
}

const getAll = async (): Promise<User[]> => {
    const [data] = await connection.execute(
        'SELECT * FROM users',
    )
    return data as User[];
}

export = {
    create,
    getAll,
}
