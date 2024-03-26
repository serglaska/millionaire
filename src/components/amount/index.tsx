import { AmountShape } from './amount-shape'

import './amount.css'

interface AmountProps {
  color: string
  amount: string
  stroke: string
  colorShape: string
}

export const Amount: React.FC<AmountProps> = ({ stroke, amount, colorShape, color }) => {
  return (
    <div className="amount-wrapper">
      <AmountShape stroke={stroke} className="amount-shape" />
      <p className="amount" style={{ color: color }}>
        {amount}
      </p>
      <div className="amount-line" style={{ background: colorShape }} />
    </div>
  )
}
