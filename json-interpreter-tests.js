// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by json-interpreter.js.
import { name as packageName } from "meteor/kiraknowsbest:json-interpreter";

// Write your tests here!
// Here is an example.
Tinytest.add('json-interpreter - example', function (test) {
  test.equal(packageName, "json-interpreter");
});
