import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      console.log(e)
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const updatedPortfolio = [...portfolioValues, e.target[0].value]
    setPortfolioValues(updatedPortfolio);
  }

  const onClick = async (e: SyntheticEvent) => {
      const result = await searchCompanies(search);
      if(typeof result === "string"){
        setServerError(result);
      }else if(Array.isArray(result.data)){
        setSearchResult(result.data);
      }
      console.log(searchResult);
    }
  return (
    <div className="App">
      <Search 
        onClick={onClick} 
        search={search} 
        handleChange={handleChange}
      />
      {
      serverError && 
      <div>Unable to connect to API</div>}
      <ListPortfolio 
        portfolioValues={portfolioValues} 
      />
      <CardList 
        searchResults={searchResult}
      />
    </div>
  );
}

export default App;
