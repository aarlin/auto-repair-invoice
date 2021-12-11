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
import Invoices from './components/invoices/Invoices'
import Settings from './components/settings/Settings'
import Clients from './components/clients/Clients'
import NewInvoice from './components/invoices/NewInvoice'
import NewClient from './components/clients/NewClient'
import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri';


const App = () => {
  useEffect(() => {
      invoke('close_splashscreen');
  });

  return (
    <ChakraProvider>
      <Titlebar />
      <Router>
        <Routes>
          <Route path="/" element={<SidebarWithHeader children={<VehicleIdentification />} />}>
          </Route>
          <Route path="/clients" element={<SidebarWithHeader children={<Clients />} />}>
          </Route>
          <Route path="/clients/new" element={<SidebarWithHeader children={<NewClient />} />}>
          </Route>
          <Route path="/invoices" element={<SidebarWithHeader children={<Invoices />} />}>
          </Route>
          <Route path="/invoices/new" element={<SidebarWithHeader children={<NewInvoice />} />}>
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
