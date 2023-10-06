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

export default function Bai2({navigation}) {
  return (
    <LinearGradient
      colors={["rgba(0,156,199,1)", "rgba(255,255,255,1)", "rgba(1,149,223,1)"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/61/61457.png",
          }}
        />
        <Text style={styles.texth1}>FORGET{"\n"}PASSWORD</Text>

        <Text style={styles.texth3}>
          Provide your account’s email for which you want to reset your password
        </Text>

        <View style={styles.searchSection}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            // underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
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
  button: {
    // padding: 10,
    paddingHorizontal: "35%",
    paddingVertical: 15,

    backgroundColor: "#F1C93B",
    // marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    borderColor: "black",
    width: "80%",
    padding: 15,
    backgroundColor: "gray",
  },
  input: {
    flex: 1, // Kích thước ô input sẽ đổ full chiều rộng còn lại
    marginLeft: 10, // Khoảng cách giữa input và biểu tượng
  },
});
