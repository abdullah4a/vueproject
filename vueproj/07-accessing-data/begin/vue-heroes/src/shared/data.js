import * as axios from 'axios';
import { format }
from 'date-fns';
import { inputDateFormat } from './constants';
import { API } from './config';
const getHeroes = async function() {
    const responce = await axios.get(`${API}/heroes.json`);
    const heroes = responce.data.map(h => {
        h.originDate = format(h.originDate, inputDateFormat);
        return h;
    });
    return heroes;
}

export const data = {
    getHeroes,
};