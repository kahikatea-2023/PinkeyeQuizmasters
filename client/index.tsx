import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import { QueryClient, QueryClientProvider } from 'react-query'

// Create a client
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
})
