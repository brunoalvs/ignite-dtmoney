import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'
import { GlobalStyle } from './styles/global'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Compras de mercado',
          type: 'withdraw',
          category: 'Saúde',
          amount: 500,
          createdAt: new Date('2022-01-20 09:00:00 GMT-0300'),
        },
        {
          id: 2,
          title: 'Freelance - Desenvolvimento de website',
          type: 'deposit',
          category: 'Dev',
          amount: 2000,
          createdAt: new Date('2022-01-05 13:00:00 GMT-0300'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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
