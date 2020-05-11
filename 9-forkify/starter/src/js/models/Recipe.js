import axios from 'axios';
import { key, proxy } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
    // const proxy = '';
    // const key = '';

        try {
            const res = await axios(`http://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            console.log(res);
        } catch (error) {
            //console.log(error);
            alert(error);
        }
    }
}