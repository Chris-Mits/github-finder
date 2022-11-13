import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {GithubProvider, AlertProvider} from './context'
import {Home, About, NotFound, User} from './pages'
import {Navbar, Footer, Alert} from './components/layout'

export const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  )
}