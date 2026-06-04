import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ProductsIndex from './pages/ProductsIndex.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { PRODUCTS } from './data/content.js'

// Route table shared by the client and the static-site generator.
// vite-react-ssg crawls these (plus getStaticPaths) to emit real HTML per page.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <ProductsIndex /> },
      {
        path: 'products/:slug',
        element: <ProductPage />,
        // Tell the generator which product pages to prerender
        entry: 'src/pages/ProductPage.jsx',
        getStaticPaths: () => PRODUCTS.map((p) => `/products/${p.slug}`),
      },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
