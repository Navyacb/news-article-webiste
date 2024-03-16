import axios from "axios"

export const fetchNewsArticles = async()=>{
        try{
          //using axios(AJAX) and async-await to fetch the contact data from api, for now it is coming from JSON file
            const response = await axios.get('/json-data/newsArticles.json')
            return response.data.length>0 ? response.data : []
        }
        catch(error){
          console.log('error while fetching data from json file',error)
        }
}