import axios from 'axios';
import { useCallback } from 'react';
export const GetDataAPI = () =>{
        const getData = useCallback(async () => {
                try {
                const response = await axios.get('data.json');
                const data = getRandomCategory(response.data)
                return data;
                }
                catch(err){
                console.error(err);
                }
        })
        return {
                getData
        };
}


const getRandomCategory = (response) => {
        const listCategory = response.data
        const category = []
        listCategory.forEach(element => {
                category.push(element)
        });
        const randomCategory = category[Math.floor(Math.random()* category.length)]
        return randomCategory;
}