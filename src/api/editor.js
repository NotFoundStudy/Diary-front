import axios from 'axios'
import {Auth} from './Auth'

const insert = async ({title, contents, userId, isSecret, password, token}) => {
    const api = Auth.create(token);
    const body = {
        userId,
        title,
        contents,
        isSecret,
        password,
    }
    const res = await api.post('/create-board', body);
    return res;
}

export const editor = {
    insert,
}