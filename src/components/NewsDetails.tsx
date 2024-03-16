import { Container, Image, Stack, Text, Title } from "@mantine/core"
import { useContext } from "react"
import { NewArticleContext } from "../state-management/NewsArticleContext"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "react-query"

const NewsDetails = ()=>{

    const {newsData} = useContext(NewArticleContext)
    const {id} = useParams()

    const fetchNewsDetail = ()=>{
        //as we are not calling api to get data , 
        //manually computing data
        const result = newsData.find(data=>{
            return data.id.toString()===id
        })

        return result

    }

    const {data:newsDetails} = useQuery({
        queryFn : ()=>fetchNewsDetail(),
        queryKey : ["StatisticsDetail"],
        enabled: newsData?.length>0
      })

    return(
        <Container size="responsive" p={50} mt={100}>
               <Stack>
                    <Link to='/'><Text size="md" c="black" pb={20} className="hover">Home</Text></Link>
                    <Title>{newsDetails?.heading}</Title>
                    <Text size="md" c="dimmed" pt={10}>{newsDetails?.date}</Text>
                    <Text size="md" c="dimmed">{newsDetails?.author}</Text>
                    <Image src={newsDetails?.image}/>
                    <Text>{newsDetails?.content}</Text>
               </Stack>
        </Container>
    )
}

export default NewsDetails