import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
// import Info from "./screens/Info";

const App = () => {
  console.log('>>>>>');
  
  return (
    <Fragment>
      <View style={styles.body}>
        <Text>hello agary</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});


export default App;
