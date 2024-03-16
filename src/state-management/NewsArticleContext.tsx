import { createContext } from "react";

//Mentioning the type of data we should receive from API
export interface INewsData{
    id: number,
    heading : string,
    image: string,
    content: string,
    date : string,
    author : string,
}

interface INewsArticleData{
    newsData : INewsData[],
}

export const NewArticleContext = createContext<INewsArticleData>({
    newsData : [],
})