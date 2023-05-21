# cars-dealer-app-backend
Cars dealer is a backend application design to handle a user request of buying a car (new or used).

## [Trello Board link](https://trello.com/b/Lu2WvVjf/portefolio-project)
##  [Deployed Backend Url](https://cars-dealer-backend-app.onrender.com)
## [Deployed Frontend url](https://luminous-dragon-aced2b.netlify.app/)
---
# Installation
 Getting Started 
 1. Fork and Clone the repository using the following command:
 ```
 git clone <repos-url>
 
 ```
 2. Navigate to the project directory and install the dependencies using commands:
 ```
'cd' into this repos
npm install

```

3. create a `.env`file in the root directory and add the following environment variables:
```
PORT=<port number>
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=<app-db>
PG_USER=postgres
```

4. start the sever 

```

npm start
```

Available endpoints 

the following endpoints are available 



        | Method |   Endpoint     |      Description        |
        | :----: | :----------:   | :-------------------:   |
        |  GET   |   /cars   |    Get all cars    |
        |  GET   | /cars/:id |  Get a car by ID    |
        |  POST  |   /cars   |  Create a new cart      |
        |  PUT   | /cars/:id | Update items from cart  |
        | DELETE | /cars/:id | Delete items from cart  |

---