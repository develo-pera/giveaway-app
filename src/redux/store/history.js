import { createBrowserHistory } from 'history'

export default function createHistory() {
  const history = createBrowserHistory()
  history.scrollRestoration = 'manual'
  return history
}
