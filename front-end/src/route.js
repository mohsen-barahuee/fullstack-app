import Home from "./components/pages/home/Home"
import Blogs from "./components/pages/blogs/blogs"
import PersonBlog from "./components/pages/blogs/person-blog/PersonBlog"
import AboutPage from "./components/pages/about/AboutPage"
import Pricing from "./components/pages/pricing/Pricing"
import Process from "./components/pages/process/Process"
import NotFound from "./components/pages/404/404"
import Register from "./components/pages/register/register"
import Account from "./components/pages/account/account"




let routes = [
    { path: '/', element: <Home /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blogs/:id', element: <PersonBlog /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/price', element: <Pricing /> },
    { path: '/process', element: <Process /> },
    { path: '/*', element: <NotFound /> },
    { path: "/register", element: <Register /> },
    { path: "/account", element: <Account /> },
]




export default routes