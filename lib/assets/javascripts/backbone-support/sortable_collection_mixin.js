Support.SortableCollectionMixin = {
  sortedBy: function(comparator) {
    var sourceCollection = this;
    var sortedCollection = new this.constructor;
    sortedCollection.comparator = comparator;

    var applySort = function() {
      sortedCollection.reset(sourceCollection.models);
      sortedCollection.sort();
    };

    this.bind("change", applySort);
    this.bind("add",    applySort);
    this.bind("remove", applySort);

    applySort();

    return sortedCollection;
  }
};