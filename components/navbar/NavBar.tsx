import { Link_NavBar } from "../ui/LinkNav";
import  {
    Home_Icon,
    Search_Icon,
    Notification_Icon,
    Messages_Icon,
    Saves_Icon,
    Lists_Icon,
    Profile_Icon, 
    More_Icon
}  from "../../public/images/navbar/Navbar_Icons";


export function NavBar(){
    return(
        <aside className='navbar'>
         
          
        <nav className='nav'>
        <div className='w-auto flex items-start '> 
            <h1 className="text-2xl">Twitter</h1>
        </div>
            <Link_NavBar 
                name="Home"
                route="/" 
                svg={<Home_Icon/>}
            />
             <Link_NavBar 
                name="Explorer"
                route="/explorerPage" 
                svg={<Search_Icon/>}
            />
             <Link_NavBar 
                name="Notifications"
                route="/notifications" 
                svg={<Notification_Icon/>}
            />
             <Link_NavBar 
                name="Messages"
                route="/message" 
                svg={<Messages_Icon/>}
            />
             <Link_NavBar 
                name="Saves"
                route="/saves" 
                svg={<Saves_Icon/>}
            />
             <Link_NavBar 
                name="Lists"
                route="/lists" 
                svg={<Lists_Icon/>}
            />
             <Link_NavBar 
                name="Profile"
                route="/" 
                svg={<Profile_Icon/>}
            />
             <Link_NavBar 
                name="More"
                route="/" 
                svg={<More_Icon/>}
            />

{/* 
             <BigPostButton/>  */}
        </nav>

        {/* <section className="login-out">
             <UserImg/>
             <UserName/>
        </section> */}
        
     </aside>
    )
}