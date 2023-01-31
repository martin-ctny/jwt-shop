import MainNavbar from "../components/ui/MainNavbar";

const MainLayout = ({children}) => {
    return ( 
        <div>
            <MainNavbar />

            <div className="container">
                {children}
            </div>
        </div>
     );
}
 
export default MainLayout;