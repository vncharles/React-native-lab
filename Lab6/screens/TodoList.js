import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TextInput,
	View,
	CheckBox,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';

const TodoList = ({ navigation }) => {
	const [data, setData] = useState({});

	const fetchData = async () => {
		try {
			const response = await fetch(
				'https://654cf5ea77200d6ba859c783.mockapi.io/api/v1/user_task/1'
			);

			const result = await response.json();

			setData(result);
			console.log('Success result: ' + result);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(async () => {
		fetchData();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					source={require('../assets/icon/back.png')}
					style={{ width: 20, height: 20 }}
				/>
				<View style={styles.headerRight}>
					<Image
						source={{ uri: data.image }}
						style={{ width: 50, height: 50, borderRadius: '100%' }}
					/>
					<View>
						<Text
							style={{
								fontWeight: 700,
								textAlign: 'center',
								fontSize: 20,
							}}
						>
							{data.name}
						</Text>
						<Text
							style={{
								fontWeight: 600,
								textAlign: 'center',
								fontSize: 15,
							}}
						>
							{data.discription}
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.containerSearch}>
				<Image
					source={require('../assets/icon/search.png')}
					style={{ width: 30, height: 30, margin: 10 }}
				/>
				<TextInput
					placeholder="Search"
					style={{
						paddingLeft: 10,
						height: 40,
						width: 280,
						outlineStyle: 'none',
					}}
				/>
			</View>
			<View style={{ height: 430 }}>
				{' '}
				<FlatList
					style={styles.containerTasks}
					data={data.task}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<View style={styles.containerItem}>
							<CheckBox value={item.status} />
							<Text
								style={{
									paddingLeft: 15,
									fontWeight: 700,
									width: 250,
									height: 20
								}}
                numberOfLines={1}
							>
                {item.title}
							</Text>
						</View>
					)}
					maxHeight={100}
				/>
			</View>

			<TouchableOpacity>
				<Image
					source={require('../assets/icon/add.png')}
					style={{ width: 50, height: 50, margin: 10 }}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default TodoList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: 'white',
		alignItems: 'center',
	},
	header: {
		width: 370,
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	headerRight: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: 200,
		alignItems: 'center',
	},
	containerSearch: {
		marginTop: 20,
		flexDirection: 'row',
		borderWidth: '0.5px',
		borderRadius: 10,
		width: 350,
		height: 50,
		alignItems: 'center',
	},
	containerTasks: {
		marginTop: 20,
		height: 200,
	},
	containerItem: {
		width: 350,
		height: 40,
		margin: 10,
		backgroundColor: 'lightgray',
		borderRadius: '15px',
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
	},
});
