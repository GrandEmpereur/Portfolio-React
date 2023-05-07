import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './scss/common.scss'
import SVGDefinitions from './assets/icons/svg-definition'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <div>
        <SVGDefinitions />
        <App />
    </div>
)
