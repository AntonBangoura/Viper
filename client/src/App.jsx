import { useState } from 'react'
import {Navbar,Welcome,Transactions,Services,Footer,Loader} from './components/index'

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App
