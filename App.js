import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView source={{uri:'https://www.youtube.com/'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
