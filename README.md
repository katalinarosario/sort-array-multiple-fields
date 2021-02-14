# sort-array-multiple-fields
This is a Javascript function that sorts an Array based on multiple field values

The function has the following parameters:
  array {Array}  - array to be sorted
  sortBy {Array} - contains the logic for sorting
      The elements of the sortBy array contains the following keys:
        field - key in the array
        mode  - sorting mode based on the value of this Array
          possible values:
            'ASC'
            'DESC'


Sample usage:

var array = [{
                name: 'Record A',
                version: 1,
                level: 1,
                id: 1
            },
            {
                name: 'Record B',
                 version: 1,
                 level: 1,
                 id: 2
            },
            {
                name: 'Record C',
                version: 1,
                level: 2,
                id: 3
            },{
                name: 'Record D',
                version: 1,
                level: 1,
                id: 4
            },{
                name: 'Record E',
                version: 1,
                level: 1,
                id: 5
            }];

 var sortByArray = [];
sortByArray.push({field: 'version', mode: 'DESC'});
sortByArray.push({field: 'level', mode: 'DESC'});
sortByArray.push({field: 'id', mode: 'DESC'});

var arraySorted = sortArray({
                    array: array,
                    sortBy: sortByArray});
                    
 arraySorted will now be:
 
  [ {
      name: 'Record C',
      version: 1,
      level: 2,
      id: 3
  },
  {
      name: 'Record E',
      version: 1,
      level: 1,
      id: 5
  },
  {
      name: 'Record D',
      version: 1,
      level: 1,
      id: 4
  },
  {
      name: 'Record B',
       version: 1,
       level: 1,
       id: 2
  },
  {
      name: 'Record A',
      version: 1,
      level: 1,
      id: 1
  }];






  


