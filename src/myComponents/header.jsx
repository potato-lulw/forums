
import { Menu, Search } from "lucide-react"
import { Link } from "react-router-dom"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {

    const links = [
        { text: "Home", href: "/" },
        { text: "Dex", href: "/" },
        { text: "Article", href: "/" },
        { text: "Forum", href: "/" },
        { text: "User", href: "/" }
    ]
    return (
        <>
            <header className="lg:flex flex-col hidden ">
                <div className="bg-myBg2 border-b-2 border-myBg px-10">
                    <div className="max-w-[1180px] h-[100px] flex items-center mx-auto text-4xl font-bold ">Logo</div>
                </div>
                <div className="bg-myBg2 border-b-2 border-myBg ">
                    <div className="max-w-[1200px] flex justify-between mx-auto items-center w-full ">
                        <ul className="  flex space-x-3 items-center h-12 place-items-center">

                            {
                                links.map((link, index) => (
                                    <li key={index} className="hover:bg-myBg h-full self-center place-self-center px-2 flex items-center">
                                        <Link to={link.href}>{link.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="space-x-4 flex">
                            <span>
                                <Link to="/login">Login</Link>
                            </span>
                            <span>
                                <Link to="/register">Register</Link>
                            </span>
                            <span className="space-x-4  gap-2 flex items-center cursor-pointer">
                                <Search size={20} />
                                Search
                            </span>
                        </div>
                    </div>

                </div>
            </header>




            <header className="lg:hidden flex bg-myBg2 sticky top-0 p-2 items-center justify-between ">
                <div className="space-x-2 flex items-center" >
                    <Sheet>
                        <SheetTrigger><Menu /></SheetTrigger>
                        <SheetContent className="bg-myBg2 text-white" side={"left"}>
                            <SheetHeader>
                                <SheetTitle className="text-white">Menu</SheetTitle>
                                <SheetDescription>
                                    <ul>
                                        {
                                            links.map((link, index) => (
                                                <li key={index} className="hover:bg-myBg h-full self-center text-lg cursor-pointer place-self-center px-2 flex items-center">
                                                    <Link to={link.href}>{link.text}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>




                    <div>
                        <h2 className="text-2xl font-bold">Logo</h2>
                    </div>
                </div>
                <div className="space-x-2 flex items-center text-gray-300">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Search size={20} />

                </div>
            </header>
        </>
    )
}

export default Header