import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Compras de mercado</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Saúde</td>
            <td>20/06/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Serviço</td>
            <td>20/06/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.100,00</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
