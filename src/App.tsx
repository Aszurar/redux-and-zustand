import './theme/global.css'

import { Player } from './pages/Player'
import { Toaster } from 'sonner'
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter'

axeAccessibilityReporter()

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Player />
    </>
  )
}

export default App
