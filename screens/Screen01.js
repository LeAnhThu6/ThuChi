import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Screen01 = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const [name, setName] = useState("anhthu");
  const [pass, setPass] = useState("123456");
  return (
    <View>
      <Text>Screen01</Text>
      <TextInput
        placeholder="Nhap ten"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Nhap pass"
        value={pass}
        onChangeText={(text) => setPass(text)}
      />
      <Button
        title="Dang nhap"
        onPress={() =>
          navigate({
            name: "Screen02",
            params: { name: name, pass: pass },
          })
        }
      />
    </View>
  );
};

export default Screen01;
