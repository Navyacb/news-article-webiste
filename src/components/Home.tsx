import { useContext, useState } from "react"
import { NewArticleContext } from "../state-management/NewsArticleContext"
import { Center, Pagination } from "@mantine/core"
import { Card, Image, SimpleGrid, Text } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { itemsPerPage } from "../consents/applicationData"

const Home = ()=>{
    const {newsData} = useContext(NewArticleContext)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = newsData? Math.ceil(newsData.length / itemsPerPage) : 0
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentData = newsData?newsData.slice(startIndex, endIndex) : []
    const navigate = useNavigate()
  

    const handlePageChange = (newPage: number) => {
      setCurrentPage(newPage);
    }

    const handleClick = (id:number)=>{
        navigate(`/newsDetails/${id}`)
    }

    return(
        <>
        <SimpleGrid cols={{ base: 1, xs: 3 }} 
                   spacing="lg" 
                   verticalSpacing="lg"
                   mx={{ base: 30, sm: 70 }} 
                    mt={150}
        >
                {
                    currentData.map(data=>{
                        return(
                            <Card p="lg"  
                                shadow="md" 
                                withBorder 
                                key={data.id}
                                className="hover"
                                onClick={()=>{handleClick(data.id)}}
                            >
                                <Card.Section>
                                    <Image src={data.image} fit="cover"/>
                                </Card.Section>
    
                                <Text fw={500} pt={5}>{data.heading}</Text>
                                
                                <Text size="sm" c="dimmed" pt={10}>{data.date}</Text>
                                <Text size="sm" c="dimmed">{data.author}</Text>
                            </Card>
                        )
                    }) 
                }
            </SimpleGrid>

        <Center>
            <Pagination
            total={totalPages}
            value={currentPage}
            onChange={handlePageChange}
            size="md"
            color="black"
            p={30}
            />
        </Center>
      </>
    )
}
export default Home