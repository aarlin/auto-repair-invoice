import './App.css'
import Titlebar from './components/Titlebar'
import SidebarWithHeader from './components/SidebarWithHeader'
import VehicleIdentification from './components/VehicleIdentification'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <div className="App">
        <Titlebar/>
        <SidebarWithHeader children={<VehicleIdentification/>}/>
      </div>
    </ChakraProvider>
  )
}

export default App
