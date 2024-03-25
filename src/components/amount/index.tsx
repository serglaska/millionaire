import { AmountShape } from './amount-shape'

import './amount.css'

interface AmountProps {
  colorShape: string
  amount: string
  stroke: string
}

export const Amount: React.FC<AmountProps> = ({ stroke, amount, colorShape }) => {
  return (
    <div className="amount-wrapper">
      <AmountShape stroke={stroke} className="amount-shape" />
      <p className="amount">{amount}</p>
      <div className="amount-line" style={{ background: colorShape}} />
    </div>
  )
}
