import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../API/Api";

const Search = (onSearchChange) => {
  const [search, setSeatch] = useState(null);

  const loadOptions = (inputValues) => {
    // try {
    //   const response = await fetch("/cities", geoApiOptions);
    //   const result = await response.text();
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValues}`,
      geoApiOptions
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSeatch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      className=" items-center"
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
