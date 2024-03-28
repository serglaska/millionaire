import { useCallback, useState } from 'react'

import { PageOrder } from './types'
import { QuestionPage, StartPage, TotalScorePage } from './pages'

import './App.css'

export const App = () => {
  const [page, setPage] = useState(PageOrder.Start)

  const handleSetPage = useCallback((page: PageOrder) => {
    setPage(page)
  }, [])

  const handleOnStartPage = useCallback(() => {
    setPage(PageOrder.Question)
  }, [])

  const showPage = useCallback(() => {
    console.log('show page', page)
    switch (page) {
      case PageOrder.Start:
        return <StartPage handleSetPage={handleSetPage} />
      case PageOrder.Question:
        return <QuestionPage handleSetPage={handleSetPage} />
      case PageOrder.Finish:
      case PageOrder.TotalScore:
      default:
        return <TotalScorePage handleOnStartPage={handleOnStartPage} />
    }
  }, [page, handleSetPage, handleOnStartPage])

  return showPage()
}
