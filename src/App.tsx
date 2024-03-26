import { useCallback, useState } from 'react'

import { QuestionPage, StartPage, TotalScorePage } from './pages'
import { PageOrder } from './types'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import './App.css'

export const App = () => {
  const [page, setPage] = useState(PageOrder.Start)

  const totalScore = useSelector((state: RootState) => state.level.totalScore)

  const handleSetPage = useCallback((page: PageOrder) => {
    setPage(page)
  }, [])

  const handleOnStartPage = useCallback(() => {
    setPage(PageOrder.Question)
  }, [])

  const showPage = useCallback(() => {
    switch (page) {
      case PageOrder.Start:
        return <StartPage handleSetPage={handleSetPage} />
      case PageOrder.Question:
        return <QuestionPage handleSetPage={handleSetPage} />
      case PageOrder.TotalScore:
        return <TotalScorePage totalScore={totalScore} handleOnStartPage={handleOnStartPage} />
      case PageOrder.Finish:
      default:
        return <div></div>
    }
  }, [page, handleSetPage, handleOnStartPage])

  return showPage()
}
