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

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { Link } from "@react-navigation/native";

export default function Bai5() {
  return (
    <LinearGradient
      colors={["rgba(185,252,170,1)", "rgba(185,252,170,1)"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Text style={styles.texth1}>LOGIN</Text>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            // underlineColorAndroid="transparent"
          />
        </View>
        {/* pass */}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="PassWord"
            // underlineColorAndroid="transparent"
          />
          <AntDesign name="eyeo" size={24} color="black" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>
        <TouchableOpacity style={styles}>
          <Text style={styles.textForget}>Forget your password ? </Text>
        </TouchableOpacity>

        <Text>Or Login With</Text>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png",
            }}
          />
          <Image
            style={styles.logo}
            source={{
              uri: "https://inkythuatso.com/uploads/thumbnails/800/2021/09/zalo-logo-inkythuatso-14-15-05-01.jpg",
            }}
          />
          <Image
            style={styles.logo}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",
            }}
          />
        </View>

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
    // width: 200,
    textAlign: "center",
  },
  button: {
    // padding: 10,
    paddingHorizontal: "35%",
    paddingVertical: 15,

    backgroundColor: "#FF3225",
    // marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
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
    // borderWidth: 1,
    borderColor: "black",
    width: "80%",
    padding: 15,

    backgroundColor: "#DEDEDE",
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
    color: "purple",
    fontSize: "13px",
  },
});
