export function capitalizeFirstLetter(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

export function courseTypeFilter(arrayFilterList, filterType) {
  if (Array.isArray(filterType)) {
    return arrayFilterList.length === 0
      ? true
      : filterType.some((item) => arrayFilterList.includes(item));
  } else {
    return arrayFilterList.length === 0
      ? true
      : arrayFilterList.includes(filterType);
  }
}

export function handleFilter(event, setFilter) {
  event.target.checked
    ? setFilter((filter) => [...filter, event.target.value])
    : setFilter((filterContent) =>
        filterContent.filter((e) => e !== event.target.value)
      );
}
