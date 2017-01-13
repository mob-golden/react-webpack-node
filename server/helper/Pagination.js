
class Pagination {
  constructor(options = {}) {
    this.success = true;
    this.data = {
      pageSize: options.pageSize || 20, //默认每页显示20条记录
      currentPage: Number(options.currentPage || 1)
    };
  }
  setOptions(options) {
    Object.assign(this.data, options);
    this.updatePage();
  }

  updatePage() {
    const {totalCount, pageSize, currentPage} = this.data;

    //总页码
    const pageCount = Math.ceil(totalCount / pageSize);
    const lastPage = totalCount === 0 || pageCount === currentPage;
    this.data.pageCount = pageCount;
    this.data.lastPage = lastPage;
  }

  setItems(items) {
    this.data.items = items;
  }

  setError({message, errorCode}) {
    this.success = false;
    if (message) {
      this.message = message;
    }
    if (errorCode) {
      this.errorCode = errorCode;
    }
  }
}

export default Pagination;
