import { Switch, Route } from 'wouter'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LibraryPage from './pages/LibraryPage'
import ShopPage from './pages/ShopPage'
import SocialPage from './pages/SocialPage'

export default function App() {
  return (
    <div className="min-h-screen bg-bat-black font-body">
      <Navbar />

      <main>
        <Switch>
          <Route path="/" component={LibraryPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/social" component={SocialPage} />
        </Switch>
      </main>

      <Footer />
    </div>
  )
}