import { useState } from "react";
import { Alert, Button, Switch, Text, View } from "react-native";

function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const pressMe = () => {
    Alert.alert("Button Pressed!");
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Home Screen
      </Text>
      <Button title="Click Me" onPress={pressMe} />
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </View>
  );
}

export default HomeScreen;
