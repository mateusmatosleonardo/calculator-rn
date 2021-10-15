import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./src/components/Button";
import Display from "./src/components/Display";

export default props =>{

  state = {
    displayValue: "0"
  }

  return(
    <View style={styles.container}> 
      <Display value={this.state.displayValue}/>
      <View style={styles.button}>
        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="AC"/>
        <Button label="."/>
        <Button label="="/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  button: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
})