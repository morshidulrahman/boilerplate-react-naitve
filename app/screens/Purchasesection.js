import { View, Text, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import Euro from "../../assets/Euro.png"
const Purchasesection = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaWrapper className="bg-white flex-1">
            <View className="flex  items-center justify-center mt-52">
                <View className='w-80 h-96 border-4 border-[#2FC8B3] rounded-2xl flex items-center justify-center relative'>
                    <View className="flex flex-row items-center">
                        <Image source={Euro} />
                        <Text className="text-[#2FC8B3] text-6xl font-bold mt-3">29.9</Text>
                    </View>
                    <Text className="text-[#2FC8B3] capitalize text-xl font-bold">per month</Text>
                    <View className="absolute -bottom-7">
                        <Text className="bg-[#2FC8B3] px-10 py-4 rounded-xl text-white text-xl uppercase font-bold">purchase</Text>
                    </View>
                </View>
                <View className="mt-40 w-80">
                    <Text className="text-[#2FC8B3] text-center text-lg leading-7 font-semibold">
                        10 Trail Days and that you can cancel you subscription during these 10 days
                    </Text>
                </View>
            </View>
        </SafeAreaWrapper>

    )
}

export default Purchasesection