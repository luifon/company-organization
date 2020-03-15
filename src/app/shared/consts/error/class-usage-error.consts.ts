export const STRATEGY_ERROR =
  'Could not find strategy for this request. You must inject a strategy through super ' +
  'class constructor or implement the _loadData() method in the class';

export const SHARED_PAGEABLE_ERROR =
  'To extend the SharedPageable class you must call the super.init() method on the OnInit lifecycle';
