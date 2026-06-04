import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './styles/global.css'

// ViteReactSSG handles both client hydration (in the browser) and
// static HTML generation (at build time) from the same routes table.
export const createRoot = ViteReactSSG({ routes })
