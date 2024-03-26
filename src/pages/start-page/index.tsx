import { FC } from 'react'
import { Button, Hand, MainTitle } from '../../components'
import { ButtonContentType, PageOrder } from '../../types'

import './start-page.css'

interface StartPageProps {
  handleSetPage: (page: PageOrder) => void
}

export const StartPage: FC<StartPageProps> = ({ handleSetPage }) => {
  return (
    <div className="start-page-wrapper">
      <Hand />
      <div className="title-wrapper">
        <MainTitle />
        <Button onClick={() => handleSetPage(PageOrder.Question)}>{ButtonContentType.Start}</Button>
      </div>
      {/* <div className="triangle" /> */}
    </div>
  )
}
