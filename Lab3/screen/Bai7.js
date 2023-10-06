import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { Link } from "@react-navigation/native";

export default function Bai7() {
  return (
    <LinearGradient
      colors={["rgba(250,193,27,1)", "rgba(184,137,0,1)"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <View width="100%">
          <Text style={styles.texth1}>LOGIN</Text>
        </View>

        <View
          style={{
            width: "100%",
            height: "20vh",
            alignItems: "center",
            rowGap: 9,
          }}
        >
          <View style={styles.searchSection}>
            <MaterialCommunityIcons name="email" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              // underlineColorAndroid="transparent"
            />
          </View>
          {/* pass */}
          <View style={styles.searchSection}>
            <Entypo name="lock" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              // underlineColorAndroid="transparent"
            />
            <AntDesign name="eyeo" size={24} color="black" />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles}>
          <Text style={styles.textForget}>CREATE AN ACCOUNT </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  tinyLogo: {
    height: 200,
    width: 200,
  },
  texth3: {
    fontSize: 17,
    fontWeight: "bold",
    // width: 100,
    width: "90%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  searchSection: {
    flexDirection: "row",
  },
  texth1: {
    fontSize: 30,
    fontWeight: "bold",
    width: 300,
    textAlign: "left",

    // justifyContent: "left",
  },
  button: {
    // padding: 10,
    paddingHorizontal: "35%",
    paddingVertical: 15,

    backgroundColor: "black",
    // marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    width: "100%",
    padding: 15,
    justifyContent: "center",
    columnGap: "1em",
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F2F2F2",
    width: "80%",
    padding: 15,

    backgroundColor: "#dea500",
  },

  logo: {
    justifyContent: "row",
    alignItems: "center",
    // borderColor: "black",
    // borderWidth: 1,
    width: 60,
    // padding: 15,

    height: 60,
    // marginLeft: 10, // Khoảng cách giữa input và biểu tượng
  },
  input: {
    flex: 1, // Kích thước ô input sẽ đổ full chiều rộng còn lại
    marginLeft: 10, // Khoảng cách giữa input và biểu tượng
  },
  textForget: {
    color: "black",
    fontWeight: "bold",
    fontSize: "22px",
  },
});
