import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
} from "react-native";

function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [text, setText] = useState("");

  const pressMe = () => {
    Alert.alert("Button Pressed!");
  };

  const onPressFunction = () => {
    alert("You entered: " + text);
  };
  return (
    <ScrollView>
      {/* {[...Array(60)].map((_, i) => (
        <Text key={i} style={{ fontSize: 16 }}>
          Home Screen Item {i + 1}
        </Text>
      ))} */}
      {/* <Text
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
      <Switch onValueChange={toggleSwitch} value={isEnabled} /> */}

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Enter text here........"
        value={text}
        onChangeText={setText}
        keyboardType="default"
        multiline
        numberOfLines={4}
      />

      <Pressable onLongPress={onPressFunction}>
        <Text>Press Me</Text>
      </Pressable>

      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{ width: 100, height: 100 }}
        resizeMode="stretch"
      />
    </ScrollView>
  );
}

export default HomeScreen;
