import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { useEffect, useState} from 'react';

const SearchWordForm = ({setSearchWord}) => {
  const [searchInput, setSearchInput] = useState('');

  const onChange = (e) => {
    setSearchInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchWord(searchInput);
  }

  return(
    <div className="mt-24">
      <form className="flex justify-center text-xl" onSubmit={onSubmit}>
        <input className="border-stone-200 border-2 rounded-xl pl-4 mx-8" type="text" placeholder="Nhập từ" onChange={onChange} value={searchInput} />
        <button className="" type="submit" > <SearchIcon /> </button>
      </form>
    </div>
  )
}

export default SearchWordForm;
