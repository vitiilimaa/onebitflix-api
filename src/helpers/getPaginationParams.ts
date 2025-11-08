export function getPaginationParams(query: any): {
  page: number;
  perPage: number;
} {
  const pageNumber =
    typeof query.page === "string" && parseInt(query.page, 10) > 0
      ? +query.page
      : 1;

  const perPageNumber =
    typeof query.perPage === "string" && parseInt(query.perPage, 10) > 0
      ? +query.perPage
      : 10;

  return { page: pageNumber, perPage: perPageNumber };
}
