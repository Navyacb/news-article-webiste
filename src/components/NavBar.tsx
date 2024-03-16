import { Burger, Center, Drawer, Flex, Group, Menu, ScrollArea, Text, Title, UnstyledButton, rem } from "@mantine/core";
import { navBarLinks } from "../consents/applicationData";
import { IconChevronDown } from '@tabler/icons-react';
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)

    const items = navBarLinks.map((link) => {
        const menuItems = link.links?.map((item) => (
          <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ))
    
          return (
            <Menu key={link.label} shadow="md">
              <Menu.Target>
                <UnstyledButton className="hover">
                  <Center>
                    <Text fw={700}>{link.label}</Text>
                    <IconChevronDown size="0.9rem" stroke={1.5} />
                  </Center>
                </UnstyledButton> 
              </Menu.Target>
              <Menu.Dropdown fw={500}>{menuItems}</Menu.Dropdown>
            </Menu>
          )
        
      })

      const title = ()=>{
        return <Link to='/'><Title order={3} c="black" size="h1" p={10}>News Articles</Title></Link>
      }

      const navigation = ()=>{
        return (
            <Group gap="lg" justify="center" p={10} visibleFrom="sm">
                {items}
            </Group>
        )
      }
    
    return(
        <>
            <Center visibleFrom="sm">{title()}</Center><hr color="#E9ECEF"/>
            <Group hiddenFrom="sm" justify="space-between">
                {title()}
                <Burger opened={drawerOpened} onClick={toggleDrawer} />
            </Group>
            {navigation()}
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                hiddenFrom="sm"
                zIndex={1000000}
                position="right"
            >
                 <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    {navigation()}
                </ScrollArea>
            </Drawer>
        </>
    )
}

export default NavBar