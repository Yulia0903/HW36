import Blog from '../../components/Blog/Blog'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Container } from '@mui/material'
export default function Blogs() {
    return (
        <div>
            <Header />
            <Container maxWidth="lg" breakPoints="lg">
                <Blog title="Блог" />
            </Container>
            <Footer />
        </div>
    )
}
