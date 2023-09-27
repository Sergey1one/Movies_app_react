import { Suspense } from "react"
import {  Outlet } from "react-router-dom"
import { Container, Header,Link } from "./Layot.styled"


export const Layout = () => {
    return (
       
        <Container>
        <Header>
         <nav> 
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
         </nav>
            </Header>
            <main>
        <Suspense fallback={<div>Loading...</div>}>
<Outlet/>
       </Suspense>
            </main>
   </Container>
          
    )
}