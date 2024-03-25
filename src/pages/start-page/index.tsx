import { Button, Hand, MainTitle } from '../../components'
import { ButtonContentType, PageOrder } from '../../types'

import './start-page.css'

interface StartPageProps {
  handleSetPage: (page: PageOrder) => void
}

export const StartPage: React.FC<StartPageProps> = ({ handleSetPage }) => {
  return (
    <div className="start-page-wrapper">
      <Hand />
      <div className="title-wrapper">
        <MainTitle />
        <Button
          buttonText={ButtonContentType.Start}
          onClick={() => handleSetPage(PageOrder.Question)}
        />
      </div>
      {/* <div className="triangle" /> */}
    </div>
  )
}
