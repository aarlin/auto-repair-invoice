import './App.css'
import Titlebar from './components/Titlebar'
import SidebarWithHeader from './components/SidebarWithHeader'
import VehicleIdentification from './components/VehicleIdentification'

import { ChakraProvider } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink
} from "react-router-dom";
import Invoices from './components/Invoices'
import Settings from './components/Settings'
import Customers from './components/Customers'


function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Titlebar />
      <Router>
        <Routes>
          <Route path="/" element={<SidebarWithHeader children={<VehicleIdentification />} />}>
          </Route>
          <Route path="/customers" element={<SidebarWithHeader children={<Customers />} />}>
          </Route>
          <Route path="/invoices" element={<SidebarWithHeader children={<Invoices />} />}>
          </Route>
          <Route path="/favorites" element={<SidebarWithHeader children={<VehicleIdentification />} />}>
          </Route>
          <Route path="/settings" element={<SidebarWithHeader children={<Settings />} />}>
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
