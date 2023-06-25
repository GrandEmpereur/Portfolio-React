import ReactDOM from 'react-dom/client'
import SVGDefinitions from './assets/svg-definition'
import Header from './common/Header'
import App from './pages/App'
import './scss/common.scss'
import'./scss/templates/App.scss'
import { inject } from '@vercel/analytics';
 
inject();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <div id="MainContent">
        <SVGDefinitions />
        <Header />
        <App />
    </div>
)
