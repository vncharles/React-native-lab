import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import App from './Lab_02/App';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./image/vs_blue.png')}
        style={styles.img}
      />
      <Text style={styles.txt1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={styles.icon}>
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
        <Text style={styles.txt2}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.txt3}>1.790.000 đ</Text>
        <Text style={styles.txt4}>1.790.000 đ</Text>
      </View>
      <View style={styles.question}>
        <Text style={styles.txt5}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Icon name="question-circle-o" color="#000" size={30} style={styles.icon2} />
      </View>
      <View style={styles.color}>
        <Text style={styles.txt6}>4 MÀU-CHỌN MÀU</Text>
        <Icon name="angle-right" color="#000" size={30} style={styles.icon3} />
      </View>
      <input type='submit' value='CHỌN MUA' style={styles.btn} ></input>
    </View>
    
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
//   justifyContent: 'center',
  },
  img: {
    width: '300px',
    height: '350px',
  },
  txt1: {
    textAlign: 'center',
    fontSize: '18px'
  },
  icon: {
    flexDirection: 'row',
    marginTop: '15px',
    marginLeft: '-20px',
  },
  icon1: {
    marginLeft: '10px'
  },
  txt2: {
    marginTop: '3px',
    marginLeft: '10px',
    fontSize: '16px'
  },
  price: {
    flexDirection: 'row',
    marginTop: '15px',
  },
  txt3: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginLeft: '-120px',
  },
  txt4: {
    fontSize: '16px',
    textDecorationLine: 'line-through',
    color: '#c4c4c4',
    marginLeft: '50px',
  },
  question: {
    flexDirection: 'row',
    marginTop: '15px',
    marginBottom: 10
  },
  txt5: {
    fontWeight: 'bold',
    color: 'red',
    marginLeft: '-120px'
  },
  icon2: {
    marginTop: '-8px',
    marginLeft: '10px'
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: '1px solid #c4c4c4',
    borderRadius: '5px',
    width: '340px',
    height: '34px',
    marginTop: '20px'
  },
  txt6: {
    fontSize: '15px',
    marginTop: '5px',
    marginLeft: '70px'
  },
  btn: {
    marginTop: '30px',
    width: '340px',
    height: '40px',
    border: '1px solid #c4c4c4',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: 'red',
    fontSize: '18px',
    fontWeight: 'bold',
  }
});
