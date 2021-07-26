# Welcome to Home Depot Interview

## Setting up the project

1. Checkout the repo
2. run `npm i`
3. run `npm run start` to start the front end and backend servers

### Challenge 1

Fetch products using rest client of your choice (fetch | axios)
Endpoint: http://localhost:3001/product-info/products
Show product image, brand, description and price as below for the first product
![product pod](/client/public/product-pod.png)

### Challenge 2

Show all the products in the page with the following layout
3 PODS in a row
e.g. [HomeDepot appliance PLP page](https://www.homedepot.com/b/Appliances-Refrigerators-French-Door-Refrigerators/N-5yc1vZc3oo)

### Challenge 3

Add a button on top of the page and name it group by ratings.
On click of the button, Fetch ratings from the following endpoint
e.g. http://localhost:3001/product-info/ratings
Group products by ratings:
products with ratings 4 and above should be grouped together
products with ratings between 3 and 4 should be grouped together
products with ratings between 2 and 3 should be grouped together
products with ratings between 1 and 2 should be grouped together
products with ratings below 1 should be grouped together

### Challenge 4

Is there any scope of refactoring
