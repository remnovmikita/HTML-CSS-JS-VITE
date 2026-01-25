const web = "https://pixabay.com/api/";
const myKey = "53507836-a90b7328b368e53f321449aea";

import axios from 'axios';
import { message } from './iziToast';

export async function getPhoto(searchText){
    try{
        const x = await axios.get(web,{ 
    params:{
        key: myKey,
        q: searchText,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        }
    });
    return x.data;
    }catch(error){
        message("error", error)
    }
}
