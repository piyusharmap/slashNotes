class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  filter() {
    this.query = this.query.find(this.queryStr);
    return this;
  }
}

module.exports = ApiFeatures;
