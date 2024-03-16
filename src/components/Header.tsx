import { AppShell} from '@mantine/core'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Header = ()=>{
    return(
    <>
        <AppShell>
            <AppShell.Header>
                <NavBar/>
            </AppShell.Header> 
        </AppShell>
        <Outlet/>
    </>
    )
}

export default Header