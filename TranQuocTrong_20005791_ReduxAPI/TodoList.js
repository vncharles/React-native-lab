// TodoList.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from './redux/actions'; // Đường dẫn tới actions

const TodoList = ({ todos, fetchTodos, addTodo, deleteTodo, updateTodo }) => {
	const [newTodoText, setNewTodoText] = useState('');

	useEffect(() => {
		fetchTodos();
	}, []);

	const handleAddTodo = () => {
		if (newTodoText.trim() !== '') {
			addTodo(newTodoText);
			setNewTodoText('');
		}
	};

	const handleDeleteTodo = (id) => {
		deleteTodo(id);
	};

	const handleUpdateTodo = (id, newTitle) => {
		updateTodo(id, newTitle);
	};

	const renderItem = ({ item }) => (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: 10,
			}}
		>
			<TextInput
				value={item.title}
				onChangeText={(text) => handleUpdateTodo(item.id, text)}
				style={{
					flex: 1,
					marginRight: 10,
					padding: 5,
					borderWidth: 1,
					borderColor: '#ccc',
				}}
			/>
			<Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
		</View>
	);

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<TextInput
				value={newTodoText}
				onChangeText={setNewTodoText}
				placeholder="Enter new todo"
				style={{
					marginBottom: 10,
					padding: 10,
					borderWidth: 1,
					borderColor: '#ccc',
				}}
			/>
			<Button title="Add Todo" onPress={handleAddTodo} />
			<FlatList
				data={todos}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				style={{ marginTop: 20 }}
			/>
		</View>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = {
	fetchTodos,
	addTodo,
	deleteTodo,
	updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
