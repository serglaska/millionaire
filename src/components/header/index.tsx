import { FC } from 'react'

import { CrossIcon, SandwichMenuIcon } from '../icons'

import './header.css'

interface HeaderProps {
  isShowSandwichBar: boolean
  setIsShowLadder: React.Dispatch<React.SetStateAction<boolean>>
  setIsShowSandwichBar: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: FC<HeaderProps> = ({
  setIsShowLadder,
  isShowSandwichBar,
  setIsShowSandwichBar,
}) => (
  <div
    className="header"
    onClick={() => {
      setIsShowSandwichBar((prevState) => !prevState)
      setIsShowLadder((prevState) => !prevState)
    }}
  >
    {isShowSandwichBar ? <SandwichMenuIcon /> : <CrossIcon />}
  </div>
)
