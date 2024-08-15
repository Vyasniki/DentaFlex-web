import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "../../shared/appBar"
import Footer from "../../shared/footer"


export default function Layout() {
    return (
        <>
            <ResponsiveAppBar />
            <main>                
                <Outlet />
            </main>
            <Footer />
        </>
    )
}