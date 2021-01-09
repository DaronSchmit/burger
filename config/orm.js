//Import MySQL
const { query } = require("../config/connection.js");
const connection = require("../config/connection.js");

//helper function for making query strings
function addQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

//converting key/values into sql string
function objToSql(obj){
  let arr = [];

  for (const key in obj){
    const value = obj[key];

    //error handling names with spaces
    if (Object.hasOwnProperty.call(obj, key)) {
      if(typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}`;
      }
      arr.push(`${key} = ${value}`);
    }
  }
  return arr.toString();
}

const orm = {
  //selects everything from the input table and does a callback function with it
  //will be used to display everything to handlebars
  all: function (tableInput, callback) {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  //makes a new table element using inserted values. then does a callback function with it
  //used to add new burgers
  //the addQuestionMarks is used for preventing SQL injection, the columns and table values we control, so there's no real worrying about them.
  //might be goot practice to escape those anyways, but ¯\_(ツ)_/¯
  create: function(table, cols, vals, callback) {
    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${addQuestionMarks(vals.length)})`;
    console.log(cols);
    console.log(queryString);

    connection.query(queryString, vals, (err, res) => {
      if (err) throw err;
      callback(res);
    });
  },
  update: function(table, objColVals, condition, callback) {
    let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;

    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      callback(res);
    });
  },
  delete: function(table, condition, callback) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }
}

//export stuff
module.exports = orm;