import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './scss/common.scss'
import SVGDefinitions from './assets/svg-definition'
import Header from './common/Header'
import'./scss/templates/App.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <div id="MainContent">
        <SVGDefinitions />
        <Header />
        <App />
    </div>
)
