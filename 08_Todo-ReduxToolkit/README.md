# Todo App using Redux ToolKit

This project is built using react-redux and redux toolkit library.

## Project Flow

1. Initially I created `configureStore` to store the states.
2. Then created Todo Feature using `createSlice` which takes 3 parameters: `name`, `initialState`, `reducers`.
3. Initial state as name suggests store the `name of feature` and `datatype of endData` to be stored.
4. Reducers stores the `functions` required in the project like `addTodo`, `removeTodo`, `updateTodo`.
5. Unlike Context API here `both definition and declarations` takes place with fiex param `(state, action)` instead of definition and userDefined.
6. Now Created the JSX components
7. `useSelector` to fetch the current todos to perform the operation.
8. `useDispatch` to use created Reducers adn perform operations on the todos fetched above.
9. Now, To provide the access of ReduxFiles. Wrapper component is required. 
10. I have wrapped the Main.jsx with the `Provider` [ import from 'reduxToolkit' ].
11. Now add `store attribute` and pass the `store` [ import from store.js ] : The provider requires a value/data which need to be made accessible to the Child Components.

## Author Socials
[Ayush Kansal](https://linktr.ee/ayushkansal)