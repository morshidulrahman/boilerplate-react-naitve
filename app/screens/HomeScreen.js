import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import { AntDesign } from '@expo/vector-icons';
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaWrapper>
      <View className="flex-1">
        <View className="flex flex-row p-4 items-center">
          <Text>
            <AntDesign name="arrowleft" size={28} color="#979797" />
          </Text>
          <Text className="flex-1 text-center text-xl capitalize text-[#979797]">confirm payment</Text>
        </View>
        <View className="p-12">
          <View className="bg-[#2FC8B3] h-[230px] w-[400px] px-5 rounded-lg p-5">
            <View className="flex justify-between flex-row items-center">
              <Text className="text-xl capitalize text-white">faz scam</Text>
              <View className="relative flex flex-row">
                <Text className="bg-[#ffffffa1] w-5 h-5 rounded-full"></Text>
                <Text className="bg-[#ffffffa1] w-5 h-5 rounded-full absolute right-3"></Text>
              </View>
            </View>
            <View className="flex flex-row space-x-4 items-center py-8">
              <Text className="text-white text-3xl">....</Text>
              <Text className="text-white text-3xl">....</Text>
              <Text className="text-white text-3xl">....</Text>
              <Text className="text-white text-xl">5678</Text>
            </View>
            <View className="mt-4 flex flex-row justify-between">
              <View className="gap-1">
                <Text className="text-white text-base capitalize">valid tharu</Text>
                <Text className="text-white text-base">05/07</Text>
              </View>
              <View className="gap-1">
                <Text className="text-white text-base capitalize">balance</Text>
                <Text className="text-white text-base">$1123</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-[460px]">
          <View className="flex flex-row justify-between p-7">
            <Text className="text-xl font-semibold uppercase">Total</Text>
            <Text className="text-xl font-semibold">$30</Text>
          </View>
          <View className="flex-1 items-center justify-center mb-10">
            <Text className="bg-[#2FC8B3] text-center px-16 py-4 text-white capitalize text-xl rounded-lg">confirm payment</Text>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
