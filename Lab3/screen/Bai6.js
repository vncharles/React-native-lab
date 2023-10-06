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

export default function Bai6() {
  function RadioButton(props) {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          paddingEnd: 30,
        }}
      >
        <View
          style={[
            {
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: "#000",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 8,
            },
            props.style,
          ]}
        >
          {props.selected ? (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#000",
              }}
            />
          ) : null}
        </View>
        <Text>{props.name}</Text>
      </View>
    );
  }
  return (
    <LinearGradient
      colors={["rgba(216,255,208,1)", "rgba(216,255,208,1)"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Text style={styles.texth1}>REGISTER</Text>

        {/* INPUT */}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            // underlineColorAndroid="transparent"
          />
        </View>

        {/* === */}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            // underlineColorAndroid="transparent"
          />
        </View>
        {/* ======================= */}
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

        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="BirthDay"
            // underlineColorAndroid="transparent"
          />
        </View>

        {/* ========= */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            width: "80%",
            justifyContent: "flex-start",
          }}
        >
          <RadioButton selected name="Male"></RadioButton>
          <RadioButton name="Female"></RadioButton>
        </View>

        {/* xuwr ly radio */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>

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
