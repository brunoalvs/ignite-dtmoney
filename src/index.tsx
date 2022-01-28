import React from 'react'
import ReactDOM from 'react-dom'
import { createServer } from 'miragejs'
import { App } from './App'
import { GlobalStyle } from './styles/global'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Compras de mercado',
          amount: 500,
          category: 'Food',
          type: 'withdraw',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Desenvolvimento de website',
          amount: 12000,
          category: 'Services',
          type: 'deposit',
          createdAt: new Date(),
        },
      ]
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
