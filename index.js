// Your first import a date module
require('datejs');

/*

Create a function to merge two arrays
within an array of users into one large
arrays of users and record date of merging

*/
function combineUsers(...arg){
    // Object variable declaration
    const combinedObject = {users:[]};

    // Use the for loop
    for (let i=0; i<arg.length; i++) {
        // Introduce the spread operator to merge arrays together

        combinedObject.users = [...combinedObject.users, ...arg[i]];
    }

    // Add the merge_date attribute and datejs to give the current date
    const currentDate = new Date();
    combinedObject.merge_date = Date.parse(currentDate).toString("M/d/yyyy");

    // To return one array
    return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};