interface SearchQueryService {
  query(expression: String, fieldName: String, fieldType: String): object
}
const mongoSearch: SearchQueryService;

//module.exports = mongoSearch;
