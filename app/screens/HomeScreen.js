import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
const HomeScreen = () => {
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  return (
    <SafeAreaWrapper>
      <View className="bg-red-500">
        <Text className="text-center text-white text-2xl font-bold">
          Home Screen
        </Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
