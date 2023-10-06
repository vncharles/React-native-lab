import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import Bai1 from './screen/bai1';
import Bai2 from './screen/Bai2';
import Bai3 from './screen/Bai3';
import Bai4 from './screen/Bai4';
import Bai5 from './screen/Bai5';
import Bai6 from './screen/Bai6';
import Bai7 from './screen/Bai7';
import Bai8 from './screen/Bai8';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 60
  }
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Bai1" 
          component={Bai1} 
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Bai1</Text>
                </View>
              )
            }
          }}/>
        <Tab.Screen 
          name="Bai2" 
          component={Bai2} 
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Bai2</Text>
                </View>
              )
            }
          }}/>
          <Tab.Screen 
          name="Bai3" 
          component={Bai3} 
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Bai3</Text>
                </View>
              )
            }
          }}/>
          <Tab.Screen 
          name="Bai4" 
          component={Bai4} 
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Bai4</Text>
                </View>
              )
            }
          }}/>
          <Tab.Screen 
          name="Bai5" 
          component={Bai5} 
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Bai5</Text>
                </View>
              )
            }
          }}/>
          <Tab.Screen 
          name="Bai6" 
          component={Bai6} 
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Bai6</Text>
                </View>
              )
            }
          }}/>
          <Tab.Screen 
          name="Bai7" 
          component={Bai7} 
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Bai7</Text>
                </View>
              )
            }
          }}/>
          <Tab.Screen 
          name="Bai8" 
          component={Bai8} 
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Bai8</Text>
                </View>
              )
            }
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}