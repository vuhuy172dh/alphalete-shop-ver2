import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../utils/search-controller';

const Search = () => {
  const { searchMode, handleSearchMode } = useContext(SearchContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  else {
    return (
      <div
        className={`${
          searchMode === 'open'
            ? 'visible z-50 opacity-100'
            : 'invisible z-[-1] opacity-0'
        } w-full h-screen fixed top-0 cursor-pointer bg-primary_60 dark:bg-secondary_60 flex justify-center items-end`}
      >
        <div
          className="w-full h-full fixed top-0 backdrop-blur-md z-10"
          onClick={handleSearchMode}
        ></div>
        <div className="w-[90vw] h-[85vh] relative bg-primary dark:bg-secondary z-20 border border-secondary_20 dark:border-primary_20 rounded-t-2xl flex flex-col items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-[calc(100%-3rem)] py-2 bg-transparent text-[1rem] text-secondary_70 dark:text-primary_70 !outline-none focus:text-secondary dark:focus:text-primary placeholder:text-secondary_50 dark:placeholder:text-primary_50"
          />
          <hr className="w-[calc(100%-3rem)] border-t border-t-secondary_30 dark:border-t-primary_30" />
        </div>
      </div>
    );
  }
};

export default Search;
