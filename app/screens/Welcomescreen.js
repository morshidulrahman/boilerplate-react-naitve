import { Image, View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import group from "../../assets/group.png"
import { AntDesign } from '@expo/vector-icons';

const Welcomescreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaWrapper className="bg-white flex-1">
            <View>
                <View className="flex justify-center items-center mt-20">
                    <Image source={group} />
                </View>
                <View className="flex items-center justify-center mt-20">
                    <View className="bg-[#2FC8B3] w-20 h-20 rounded-full flex items-center justify-center">
                        <AntDesign name="arrowright" size={28} color="white" />
                    </View>
                </View>
            </View>
        </SafeAreaWrapper>

    )
}

export default Welcomescreen