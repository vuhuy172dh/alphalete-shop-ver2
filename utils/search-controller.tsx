import { defaultHead } from "next/head"
import React, { useCallback, useState } from "react"

interface SearchValue {
  searchMode: 'open' | 'close'
  handleSearchMode: VoidFunction
}

export const SearchContext = React.createContext({
  searchMode: 'close',
  handleSearchMode: () => { }
})

interface Props {
  children: React.ReactNode
}

const SearchController = ({ children }: Props) => {
  const [searchMode, setSearchMode] = useState<'open' | 'close'>('close')
  const handleSearchMode = useCallback(() => {
    if (searchMode === 'open') {
      setSearchMode('close')
    }
    else {
      setSearchMode('open')
    }
  }, [searchMode])

  return <SearchContext.Provider value={{ searchMode, handleSearchMode }}>
    {children}
  </SearchContext.Provider>
}

export default SearchController
