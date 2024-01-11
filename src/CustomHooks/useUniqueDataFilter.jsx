import { useState, useEffect } from "react";

const useUniqueDataFilter = (data, filterString) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Create a Set to store unique affiliations
    const uniqueAffiliations = new Set();

    // Map through allCourses and add unique affiliations to the Set
    data.forEach((element) => {
      uniqueAffiliations.add(element[filterString]);
    });

    // Convert the Set back to an array and update the state
    setFilteredData(Array.from(uniqueAffiliations));
  }, [data, filterString]);

  return [filteredData];
};

export default useUniqueDataFilter;
