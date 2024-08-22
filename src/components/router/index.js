import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "../../shared/appBar"
import Footer from "../../shared/footer"
import AuthProvider from "../../shared/hooks/AuthProvider"


export default function Layout() {
    return (
        <>
        <AuthProvider>
            <ResponsiveAppBar />
            <main>                
                <Outlet />
            </main>
            <Footer />
        </AuthProvider>

        </>
    )
}