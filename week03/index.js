// Identification Header
console.log("Trevon Houston");
console.log("Course: CS31103");
console.log("Week 3");
console.log("----------------------");

// Runtime Information
console.log("Node Version:", process.version);
console.log("Current Date/Time:", new Date());

console.log("----------------------");

// Environment Variables
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || "development";

console.log("PORT:", port);
console.log("NODE_ENV:", environment);

console.log("----------------------");

// App Configuration Object
const appConfig = {
  port: port,
  environment: environment,
  startedAt: new Date()
};

console.log("App Config:");
console.log(JSON.stringify(appConfig, null, 2));
