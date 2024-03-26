import { useConfig } from '../../hooks'
import { Amount } from '../amount'

import './amount-ladder.css'

export const AmountLadder = () => {
  const { amountLadder } = useConfig(0)

  return (
    <div className="amount-ladder-wrapper">
      {amountLadder.map((amount) => (
        <Amount key={amount} stroke="red" amount={amount} colorShape="blue" />
      ))}
    </div>
  )
}
