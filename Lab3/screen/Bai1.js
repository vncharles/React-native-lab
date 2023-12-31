import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Bai1({navigation}) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(241,241,247,1)', 'rgba(255,255,255,1)', 'rgba(90,220,255,1)']}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        

        <Image style={styles.image} source={{uri: "https://www.svgrepo.com/show/175586/circle-outline.svg"}}/>

        <Text style={styles.textTitle}>GROW YOUR BUSINESS</Text>  

        <Text style={styles.textDescription}>We will help you to grow your business using online server</Text>  
        
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.textFooter}>HOW WE WORK</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    // backgroundImage: 'linear-gradient(to bottom, #00CCF9 0%, #00CCF9 58.04%, #00CCF9 69.79%, #00CCF9 36%, #00CCF9 100%)',
  },
  image: {
    marginTop: '69px',
    width: '142px',
    height: '142px',
    border: '15px'
  },
  textTitle: {
    marginTop: '52px',
    width: '189px',
    height: '58px',
    textAlign: 'center',
    fontSize: '25px',
    lineHeight: '29.3px',
    fontWeight: 800,
    color: '#000000'
  },
  textDescription: {
    marginTop: '62px',
    width: '302px',
    height: '36px',
    textAlign: 'center',
    fontSize: '15px',
    lineHeight: '17.58px',
    fontWeight: 700,
    color: '#000000'
  },
  containerBtn: {
    width: '100%', 
    height: '70px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '45px',
    justifyContent: 'space-around',
    marginTop: '50px',

  },
  btn: {
    width: '119px',
    height: '48px',
    padding: '12px',
    borderRadius: '10px',
    backgroundColor: '#E3C000',
    textAlign: 'center',
    
  }, 
  btnText: {
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '23.44px',
    fontWeight: 700,
    color: '#000000'
  },

  containerFooter: {
    width: '302px',
    height: '53px',
    textAlign: 'center',
    marginTop: '15px'
  },
  textFooter: {
    textAlign: 'center',
    fontSize: '18px',
    lineHeight: '21.09px',
    fontWeight: 700,
    color: '#000000'
  }
});
