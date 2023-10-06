import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

export default function Bai4({navigation}) {
  return (
    <LinearGradient
      colors={["rgba(0,156,199,1)", "rgba(255,255,255,1)", "rgba(1,149,223,1)"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Text style={styles.texth}>CODE</Text>

        <Text style={styles.texth1}>VERIFICATION</Text>

        <Text style={styles.texth3}>
          Enter ontime password sent on ++849092605798
        </Text>

        <View style={styles.searchSection}>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  texth1: {
    fontSize: 30,
    fontWeight: "bold",
    // width: 200,
    textAlign: "center",
  },
  texth: {
    fontSize: 60,
    fontWeight: "bold",
    // width: 200,
    textAlign: "center",
  },
  button: {
    // padding: 10,
    // paddingHorizontal: "35%",
    width: "80%",
    paddingVertical: 15,

    backgroundColor: "#F1C93B",
    // marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    // width: "100%",
  },
  searchSection: {
    flexDirection: "row",
  },
  input: {
    justifyContent: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    width: 50,
    // padding: 15,
    height: 50,
    backgroundColor: "transparent",
    // marginLeft: 10, // Khoảng cách giữa input và biểu tượng
  },
});
