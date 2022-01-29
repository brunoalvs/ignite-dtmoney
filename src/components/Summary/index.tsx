import { useContext, useEffect, useState } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'

import { Container } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const [withdrawAmount, setWithdrawAmount] = useState(0)
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const total = transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'deposit') {
          accumulator.income += transaction.amount
        } else {
          accumulator.withdraw += transaction.amount
        }

        return accumulator
      },
      {
        income: 0,
        withdraw: 0,
      },
    )

    setIncomeAmount(total.income)
    setWithdrawAmount(total.withdraw)
    setTotalAmount(total.income - total.withdraw)
  }, [transactions])

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incomeAmount)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(withdrawAmount)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalAmount)}
        </strong>
      </div>
    </Container>
  )
}
