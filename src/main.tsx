import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './scss/common.scss'
import SVGDefinitions from './assets/icons/svg-definition'
import Header from './common/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <div>
        <SVGDefinitions />
        <Header />
        <App />
    </div>
)
