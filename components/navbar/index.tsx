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

import { Header } from "../ui/header";


export function NavBar(){
    return(
        <aside className='w-2/5 flex flex-col border-r '>
            <Header>
                <h1 className="text-2xl font-medium text-start ml-4">Twitter</h1><span className="text-xl text-blue-400" >clone</span>
            </Header>

            <nav className='nav'>
                <Link_NavBar 
                    name="Home"
                    route="/" 
                    svg={<Home_Icon/>}
                />
                <Link_NavBar 
                    name="Explorer"
                    route="/explorer" 
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
                    route="/profile" 
                    svg={<Profile_Icon/>}
                />
                <Link_NavBar 
                    name="More"
                    route="/" 
                    svg={<More_Icon/>}
                />

                <button
                    type="submit"
                    className="w-10/12 h-14 bg-blue-500 text-white text-bold rounded hover:bg-blue-600 "
                >Tweet</button>
            </nav>

        {/* <section className="login-out">
             <UserImg/>
             <UserName/>
        </section> */}
        
     </aside>
    )
}