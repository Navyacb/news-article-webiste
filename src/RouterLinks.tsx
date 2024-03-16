import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import NewsDetails from './components/NewsDetails'

const RouterLinks = ()=>{
    return(
        <Routes>
            <Route element = {<Header/>}>
                <Route path="/" element={<Home/>}/> 
                <Route path='/newsDetails/:id' element={<NewsDetails/>}/>
            </Route>
        </Routes>
    )
}

export default RouterLinks