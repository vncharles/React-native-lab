// index.js (hoặc App.js)
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import TodoList from './TodoList'; // Đường dẫn tới component TodoList
import todosReducer from './redux/reducers'; // Đường dẫn tới reducers

const store = createStore(todosReducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={store}>
			<TodoList />
		</Provider>
	);
};

export default App;
