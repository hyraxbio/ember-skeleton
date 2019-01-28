export default function customSortJsonArray(params) {
  var order = params.order || [];
  var array = params.array || [];
  var key = params.key || "";
  var orderedArray = [];
  //Include all items in the order list that is included in the passed params.
  order.forEach(orderItem => {
    var arraySubset = array.filter((arrayItem) => {
      return arrayItem[key] === orderItem;
    });
    arraySubset.forEach(arrayItem => {
      orderedArray.push(arrayItem);
    });
  });
  //Fallback to include items not in the order list in the passed params.
  array.forEach(item => {
    if (order.indexOf(item[key]) < 0) {
      orderedArray.push(item);
    }
  });
  return orderedArray;
}