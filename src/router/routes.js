import MainLayout from '../layouts/Main.vue'
import NotFound from '../pages/404'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import ListingBlog from '../pages/ListingBlog'
import Sidebar from '../pages/Aside'
import SingleBlog from '../pages/SingleBlog'
import Testimonials from '../pages/Testimonials'
import SingleTestimonial from '../pages/SingleTestimonial'
import Contact from '../pages/Contact'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'
import UserMenu from '../components/UserMenu'
import AdminBlogPosts from '../components/AdminBlogPosts'
import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'
import Pages from '../components/Pages'
import Settings from '../components/Settings'
import SEO from '../components/SEO'

export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            // projects: Projects,
            contact: Contact,
            blog: ListingBlog,
        },
    }, {
        path: '/blog',
        params: {
            type: 'articles',
        },
        name: 'blog',
        component: Blog,
        children: [{
            path: '/',
            params: {
                type: 'articles',
            },
            name: 'listingblog',
            components: {
                default: ListingBlog,
                sidebar: Sidebar
            },

        }]
    }, {
        name: 'SingleBlog',
        path: '/blog/:id',
        component: SingleBlog
    }, 
    // {
    //     path: '/testimonials',
    //     name: 'testimonials',
    //     component: Testimonials
    // },
     {
        name: 'SingleTestimonial',
        path: '/testimonial/:id',
        component: SingleTestimonial
    }, {
        name: 'Contact',
        path: '/contact',
        component: Contact
    }, {
        name: 'Login',
        path: '/login',
        component: Login
    }, {
        name: 'SignUp',
        path: '/signup',
        component: SignUp
    }, {
        name: 'Dashboard',
        path: '/dashboard/',
        components: {
           default: Dashboard,
           userMenu: UserMenu,
        },
        children: [
        {
            path: '/dashboard/profile',
             components: {
                default: Profile,
                userMenu: UserMenu
            },
            meta: {
                requiresAuth: true
            }        
        },
        {
            path: '/dashboard/articles',
            name: 'admin-posts',
            components: {
                userMenu: UserMenu,
                default: AdminBlogPosts,
            },
            meta: {
                requiresAuth: true,
                adminListing: true,
                postType: 'articles'
            }
        },
        // {
        //     path: '/dashboard/AddPost',
        //     name: 'AddPost',
        //     components: {
        //         userMenu: UserMenu,
        //         default: AddPost,
        //     },
        //     meta: {
        //         requiresAuth: true
        //     }
        // },
        {
            path: '/dashboard/AddPost',
            name: 'AddPost',
            components: {
                userMenu: UserMenu,
                default: EditPost,
            },
            meta: {
                requiresAuth: true
            }
        },
          {
            path: '/dashboard/:type/:id',
            name: 'EditPost',
            components: {
                userMenu: UserMenu,
                default: EditPost,
            },
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/dashboard/pages',
            params: {
                postType: 'pages',
                
            },
            name: 'admin-pages',
            components: {
                userMenu: UserMenu,
                default: Pages,
            },
            meta: {
                requiresAuth: true,
                postType: 'pages',
                adminListing: true,
            }
        },
        {
            path: '/dashboard/settings/',
            name: 'Settings',
            components: {
                userMenu: UserMenu,
                default: Settings,
            },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/dashboard/settings/seo',
            name: 'SEO',
            components: {
                userMenu: UserMenu,
                default: SEO,
            },
            meta: {
                requiresAuth: true
            }
        }
        ],
        meta: {
            requiresAuth: true
        }
    }, {
        path: '*',
        component: NotFound
    }, 
 ];