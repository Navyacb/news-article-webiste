import { useQuery } from 'react-query';
import RouterLinks from './RouterLinks';
import { NewArticleContext } from './state-management/NewsArticleContext';
import { fetchNewsArticles } from './api/news-articles/newsQuery';

const App = ()=>{

  //Using react-query to update the state with contact data fetched from api
  const {data:newsData} = useQuery({
    queryFn : ()=>fetchNewsArticles(),
    queryKey : ["NewsData"],
  })


  return (
    <NewArticleContext.Provider value={{newsData}}>
      <RouterLinks/>
    </NewArticleContext.Provider>
  )
}

export default App
