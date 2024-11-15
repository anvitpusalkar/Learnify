import { Button } from "./ui/button";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { BsCalendar4Week } from "react-icons/bs";


const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-filter backdrop-blur-lg border-b border-border">
            <div className="w-full mx-auto px-4 py-4 flex justify-between items-center">
                <div id="logo" className="flex flex-row items-center">
                    <svg className="w-8 h-8 mr-1 text-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinejoin="round" d="m17 13 3.4641-2V7L17 5l-3.4641 2v4M17 13l-3.4641-2M17 13v4l-7.00001 4M17 13V9m0 4-7.00001 4m3.53591-6L10.5 12.7348M9.99999 21l-3.4641-2.1318M9.99999 21v-4m-3.4641 2v-.1318m0 0V15L10.5 12.7348m-3.96411 6.1334L3.5 17V5m0 0L7 3l3.5 2m-7 0 2.99999 2M10.5 5v7.7348M10.5 5 6.49999 7M17 9l3.5-2M17 9l-3.5-2M9.99999 17l-3.5-2m0 .5V7" />
                    </svg>
                    <h1 className="text-2xl font-semibold text-foreground">Coursify</h1>
                    <div id="page-items" className="hidden md:flex ml-12 space-x-4">
                        <Button variant="link" className="text-foreground hover:text-foreground/80 border-0">Features</Button>
                        <Button variant="link" className="text-foreground hover:text-foreground/80 border-0">Testimonials</Button>
                        <Button variant="link" className="text-foreground hover:text-foreground/80 border-0">Pricing</Button>
                    </div>
                </div>

                <div id="auth" className="hidden md:flex space-x-4">
                    {/* Uncomment and update these buttons if needed
                    <Button variant="ghost" className="text-foreground hover:text-foreground/80">Login</Button>
                    <Button variant="ghost" className="text-foreground hover:text-foreground/80">Sign Up</Button>
                    */}
                </div>

                <div id="socials" className="flex items-center space-x-2">
                    <Button variant="secondary" size="" className="text-foreground hover:text-foreground/80 border-0" >
                    Course of the Week <BsCalendar4Week/>
                    </Button>
                    <Button size="icon" variant="ghost" className="text-foreground hover:text-foreground/80 border-0">
                        <FaXTwitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Button>
                    <Button size="icon" variant="ghost" className="text-foreground hover:text-foreground/80 border-0">
                        <FaGithub className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Button>
                    <ModeToggle className="border-0" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar