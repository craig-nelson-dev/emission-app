# emission-app

# How to run
1. Clone the repository and checkout `main` branch
2. `yarn install`
3. `yarn dev` will run both backend and frontend app


_Note: If `yarn dev` does not work, you can install node_modules manually for each app and run it separately_



# Project details
1. `web` contains the frontend application (`create-react-app`, `typescript`, `chakra-ui`, `fetch`, `jest` were used)
2. `api` contains the backend application (`express`, `typescript` were used). Mutating the value in `data.json` will immediately reflect the data result that frontend app gets from the backend.

### Todos
- [ ] Need to implement absolute path
- [ ] Need to implement more unit tests using Jest
