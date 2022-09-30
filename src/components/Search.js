import React, {useState, useCallback} from "react";

function Search({filter}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback((event)=> {
    setSearchTerm(event.target.value)
    filter(event.target.value);
  }, [searchTerm, filter])
  

  return (
    <div className="ui large fluid icon input">
      <input
        value={searchTerm}
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
