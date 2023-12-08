import { View, Text, ScrollView, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Delete, Set, Update } from "../redux/Slice";
const Screen02 = ({ navigation, route }) => {
  const API = "https://65485be9dd8ebcd4ab22ca1b.mockapi.io/thuchi";
  useEffect(() => {
    const get = async () => {
      const res = await fetch(API);
      const data = await res.json();
      dispatch(Set(data[0]));
    };

    get();
  }, []);
  const thuchi = useSelector((state) => state.thuchi);
  const dispatch = useDispatch();

  const Item = ({ item }) => {
    const [tien, setTien] = useState(item.money);
    return (
      <View style={{ width: "100%", paddingBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
            margin: 10,
            width: "100%",
          }}
        >
          <Text style={{ width: "100%" }}>{item.id}</Text>
          <Text style={{ width: "100%" }}>{item.type}</Text>
          <TextInput
            style={{ width: "100%" }}
            value={tien}
            onChangeText={(text) => setTien(text)}
          />
          <Button
            title="Delete"
            onPress={() => {
              dispatch(Delete(item.id));
            }}
          />
          <Button
            title="Update"
            onPress={() => {
              dispatch(Update({ ...item, money: tien }));
              hienthi;
            }}
          />
        </View>
      </View>
    );
  };
  let tongChi = 0;
  let tongThu = 0;
  const hienthi = thuchi?.map((item) => {
    if (item.type === "chi") {
      tongChi += parseInt(item.money);
    } else {
      tongThu += parseInt(item.money);
    }
  });
  hienthi;

  return (
    <View style={{ width: "100%", padding: 20 }}>
      <Text>{route.params.name}</Text>
      <ScrollView>
        {thuchi?.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ScrollView>
      <Text>Tong chi: {tongChi}</Text>
      <Text>Tong thu: {tongThu}</Text>
      <Text>Tong: {tongThu - tongChi}</Text>
    </View>
  );
};

export default Screen02;
