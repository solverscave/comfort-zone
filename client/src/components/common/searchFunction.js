import React, { useState } from "react";

function searchFunction() {
  const [SearchTerms, setSearchTerms] = useState(initialState);

  const onChangeSearch = (e) => {
    setSearchTerms(e.currentTsrget.value);
  };
  return (
    <div>
      <input
        value={SearchTerms}
        onChange={onChangeSearch}
        name="Search By Typing"
      ></input>
    </div>
  );
}

export default searchFunction;
