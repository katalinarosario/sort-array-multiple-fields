  function sortArray(params){
            var array = params.array;
            var sortBy = params.sortBy;
            var sortConditions = null;
            var results = null;

            array.sort(function (a, b) {
                sortConditions = null;
                sortBy.forEach(function (condition) {
                    results = null;
                    if (condition.mode == "ASC"){
                        results = a[condition.field] -  b[condition.field];
                    } else {
                        results = b[condition.field] -  a[condition.field];
                    }
                    if (sortConditions == null){
                        sortConditions = results;
                    } else {
                        sortConditions = sortConditions || results;
                    }
                    return true;
                });
                return sortConditions;
            });
         
            return array;
        }
