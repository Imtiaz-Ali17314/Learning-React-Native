import { Alert, Button, Text, View } from "react-native";

function HomeScreen() {
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
    </View>
  );
}

export default HomeScreen;
