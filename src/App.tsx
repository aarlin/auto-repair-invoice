import './App.css'
import Titlebar from './components/Titlebar'
import SidebarWithHeader from './components/SidebarWithHeader'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Titlebar/>
      <div className="App">
        <SidebarWithHeader children={undefined}/>
      </div>
    </ChakraProvider>
  )
}

export default App
