import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import Avater from "./../../assets/avatarjpg.jpg"
const Shopenlive = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaWrapper className="flex-1 bg-white">
            <View className="relative">
                <View className="flex flex-row justify-between p-5 mt-6 items-center">
                    <TouchableOpacity>
                        <Text> <AntDesign name="arrowleft" size={28} color="#979797" /></Text>
                    </TouchableOpacity>
                    <Text className="text-2xl capitalize text-[#979797]">shopenlive</Text>
                    <TouchableOpacity>
                        <Text><Ionicons name="search" size={28} color="#979797" /></Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View className="mx-5 bg-white shadow-2xl rounded-lg mt-5 border border-gray-200 p-3">
                        <View className="flex flex-row justify-between items-center">
                            <View className="flex flex-row space-x-3 items-center">
                                <View>
                                    <Image source={Avater} className="h-10 w-10 rounded-full  " />
                                </View>
                                <View className="flex gap-1">
                                    <Text className="capitalize font-bold text-lg">mery lugh</Text>
                                    <View className="flex flex-row items-center space-x-1">
                                        <AntDesign name="calendar" size={22} color="#2FC8B3" />
                                        <Text className="text-sm font-bold">Today | 10:00 AM</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Entypo name="dots-three-horizontal" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View className="border border-gray-300 mt-4 rounded-lg p-2">
                            <Text className="py-2 px-2 mb-2">Zara Clothing Exhibition at New York...</Text>
                            <View className="flex flex-row items-center space-x-6">
                                <Image source={require("./../../assets/clothes.jpg")} className="w-56 h-56 rounded-xl" />
                                <View className="flex items-center">
                                    <Image source={require("./../../assets/febric.jpg")} className="w-32 h-28 mb-2 rounded-xl
                                    " />
                                    <Image source={require("./../../assets/geltyimage.jpg")} className="w-32 h-[106px] rounded-xl" />
                                </View>
                            </View>
                        </View>
                        <View className="flex justify-between items-center flex-row mt-4">
                            <View className="flex flex-row space-x-6">
                                <View className="flex flex-row space-x-2 items-center">
                                    <TouchableOpacity>
                                        <AntDesign name="heart" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text>
                                        529
                                    </Text>
                                </View>
                                <View className="flex flex-row space-x-2 items-center">
                                    <TouchableOpacity>
                                        <AntDesign name="message1" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text>
                                        21
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome5 name="telegram-plane" size={24} color="black" />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View>
                                <Entypo name="dots-three-horizontal" size={24} color="black" />
                            </View>
                        </View>
                        <View className="flex flex-row items-center space-x-4 mt-4 mb-3">
                            <Text className="font-bold text-lg">Mery lugh</Text>
                            <Text className="text-gray-700 text-base">My new setup! What do you think?</Text>
                        </View>
                    </View>
                    <View className="mx-5 bg-white shadow-2xl rounded-lg mt-5 border border-gray-200 p-3">
                        <View className="flex flex-row justify-between items-center">
                            <View className="flex flex-row space-x-3 items-center">
                                <View>
                                    <Image source={Avater} className="h-10 w-10 rounded-full  " />
                                </View>
                                <View className="flex gap-1">
                                    <Text className="capitalize font-bold text-lg">mery lugh</Text>
                                    <View className="flex flex-row items-center space-x-1">
                                        <AntDesign name="calendar" size={22} color="#2FC8B3" />
                                        <Text className="text-sm font-bold">Today | 10:00 AM</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Entypo name="dots-three-horizontal" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View className="border border-gray-300 mt-4 rounded-lg p-2">
                            <Text className="py-2 px-2 mb-2">Zara Clothing Exhibition at New York...</Text>
                            <View className="flex flex-row items-center space-x-6">
                                <Image source={require("./../../assets/clothes.jpg")} className="w-56 h-56 rounded-xl" />
                                <View className="flex items-center">
                                    <Image source={require("./../../assets/febric.jpg")} className="w-32 h-28 mb-2 rounded-xl
                                    " />
                                    <Image source={require("./../../assets/geltyimage.jpg")} className="w-32 h-[106px] rounded-xl" />
                                </View>
                            </View>
                        </View>
                        <View className="flex justify-between items-center flex-row mt-4">
                            <View className="flex flex-row space-x-6">
                                <View className="flex flex-row space-x-2 items-center">
                                    <TouchableOpacity>
                                        <AntDesign name="heart" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text>
                                        529
                                    </Text>
                                </View>
                                <View className="flex flex-row space-x-2 items-center">
                                    <TouchableOpacity>
                                        <AntDesign name="message1" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text>
                                        21
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome5 name="telegram-plane" size={24} color="black" />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View>
                                <Entypo name="dots-three-horizontal" size={24} color="black" />
                            </View>
                        </View>
                        <View className="flex flex-row items-center space-x-4 mt-4 mb-3">
                            <Text className="font-bold text-lg">Mery lugh</Text>
                            <Text className="text-gray-700 text-base">My new setup! What do you think?</Text>
                        </View>
                    </View>
                    <View className="mx-5 bg-white shadow-2xl rounded-lg mt-5 border border-gray-200 p-3">
                        <View className="flex flex-row justify-between items-center">
                            <View className="flex flex-row space-x-3 items-center">
                                <View>
                                    <Image source={Avater} className="h-10 w-10 rounded-full  " />
                                </View>
                                <View className="flex gap-1">
                                    <Text className="capitalize font-bold text-lg">mery lugh</Text>
                                    <View className="flex flex-row items-center space-x-1">
                                        <AntDesign name="calendar" size={22} color="#2FC8B3" />
                                        <Text className="text-sm font-bold">Today | 10:00 AM</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Entypo name="dots-three-horizontal" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View className="border border-gray-300 mt-4 rounded-lg p-2">
                            <Text className="py-2 px-2 mb-2">Zara Clothing Exhibition at New York...</Text>
                            <View className="flex flex-row items-center space-x-6">
                                <Image source={require("./../../assets/clothes.jpg")} className="w-56 h-56 rounded-xl" />
                                <View className="flex items-center">
                                    <Image source={require("./../../assets/febric.jpg")} className="w-32 h-28 mb-2 rounded-xl
                                    " />
                                    <Image source={require("./../../assets/geltyimage.jpg")} className="w-32 h-[106px] rounded-xl" />
                                </View>
                            </View>
                        </View>
                        <View className="flex justify-between items-center flex-row mt-4">
                            <View className="flex flex-row space-x-6">
                                <View className="flex flex-row space-x-2 items-center">
                                    <TouchableOpacity>
                                        <AntDesign name="heart" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text>
                                        529
                                    </Text>
                                </View>
                                <View className="flex flex-row space-x-2 items-center">
                                    <TouchableOpacity>
                                        <AntDesign name="message1" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text>
                                        21
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome5 name="telegram-plane" size={24} color="black" />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View>
                                <Entypo name="dots-three-horizontal" size={24} color="black" />
                            </View>
                        </View>
                        <View className="flex flex-row items-center space-x-4 mt-4 mb-3">
                            <Text className="font-bold text-lg">Mery lugh</Text>
                            <Text className="text-gray-700 text-base">My new setup! What do you think?</Text>
                        </View>
                    </View>
                </ScrollView>
                <View className="bg-white absolute bottom-48 right-10 w-16 h-16 z-10 flex items-center justify-center rounded-full">
                    <AntDesign name="pluscircle" size={64} color="#2FC8B3" />
                </View>
            </View>
        </SafeAreaWrapper>

    )
}

export default Shopenlive