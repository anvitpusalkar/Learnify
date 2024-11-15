import { ThemeProvider } from './components/theme-provider'
import Landing from './pages/Landing'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className='border-2 border-black min-h-screen w-full flex bg-white text-black overflow-x-hidden'>
          <Landing />
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
