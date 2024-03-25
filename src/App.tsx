import { useState } from 'react'

import { QuestionPage, StartPage } from './pages'
import { PageOrder } from './types'

import './App.css'

export const App = () => {
  const [page, setPage] = useState(PageOrder.Start)

  const handleSetPage = (page: PageOrder) => {
    setPage(page)
  }

  const showPage = () => {
    switch (page) {
      case PageOrder.Start:
        return <StartPage handleSetPage={handleSetPage} />
      case PageOrder.Question:
        return <QuestionPage />
      case PageOrder.Finish:
      default:
        return <div />
    }
  }

  return <>{showPage()}</>
}
