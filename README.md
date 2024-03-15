# qa-library 

#### qa-library is publish as an NPM package. 

The intent of the qa-library is it is a central location to store repeated code and highly customizable HTTPs request types for the API’s being tested. It is also meant to demonstrate the QA automation architecture on a basic level.  

These HTTPs requests are the building blocks for both TDD and BDD test cases.  

Can be used in the beforeHook or afterHook for certain front-end testing scenarios.  

#### util/https.ts 
Has the sendHttpRequest function which is the base for all HTTPs types. 

#### http-client.ts 
Has the following HTTPs types that will be used as services for the APIs. 

-GET 
-POST 
-PATCH 
-PUT 
-DELETE 

#### services 
Create all of the HTTPs request types for the APIs being tested. The files are JS classes names of the API.  

Once an NPM install has been done. Engineers can then invoke the class and execute the desired HTTPs request type from the API when creating test cases. 