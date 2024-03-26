import { FC } from 'react'
import './main-title.css'

const mainTitle = 'Who wants to be a millionaire?'

interface MainTitleProps {
  children?: string
}

export const MainTitle: FC<MainTitleProps> = ({ children = mainTitle }) => (
  <h1 className="title">{children}</h1>
)
