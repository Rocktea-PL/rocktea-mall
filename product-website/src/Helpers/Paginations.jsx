export const paginateData = (data, currentPage) => {
  const itemsPerPage = 10;
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = data.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentOrders,
    pageCount: Math.ceil(data.length / itemsPerPage),
  };
};
