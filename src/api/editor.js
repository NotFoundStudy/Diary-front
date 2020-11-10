import {auth} from './auth'

const insert = async ({title, contents, userId, isSecret, password, token}) => {
    const api = auth.create(token);
    const body = {
        userId,
        title,
        contents,
        isSecret,
        password,
    }
    const res = await api.post('/board/create-board', body);
    console.log(res);
    return res;
}

export const editorApi = {
    insert,
}