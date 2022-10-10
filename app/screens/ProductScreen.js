import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import { AntDesign, Foundation } from '@expo/vector-icons';
import tw from 'twrnc';


const ProductScreen = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaWrapper className='bg-white flex-1'>
            <View>
                <View style={tw`flex flex-row p-5 items-center mt-6`}>
                    <TouchableOpacity>
                        <AntDesign name="arrowleft" size={28} color="#979797" />
                    </TouchableOpacity>
                    <Text style={tw`flex-1 text-center text-xl capitalize text-[#979797]`}>Reviews</Text>
                </View>

                <Text style={tw`text-[#979797] px-5 text-2xl font-semibold`}>Product</Text>

                {/* productlist*/}
                <ScrollView >
                    <View style={tw`mt-4 border-b-2 border-b-[#2FC8B3] mx-5 py-6`}>
                        <View className="flex-row">
                            <Image source={require("./../../assets/Rectangle.png")} style={tw`w-28 h-28 rounded-xl`} />
                            <View style={tw`ml-5 flex-row justify-between items-center flex-1`}>
                                <View>
                                    <Text style={tw`capitalize text-xl font-bold`}>ladis shirt</Text>
                                    <View style={tw`flex-row py-3`}>
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                    </View>
                                    <View style={tw`flex-row`}>
                                        <Text style={tw`text-base font-semibold `}>2</Text>
                                        <Text style={tw`text-base font-semibold ml-1 capitalize`}>reviews</Text>
                                    </View>
                                </View>
                                <AntDesign name="right" size={38} color="black" />
                            </View>
                        </View>
                    </View>

                    <View style={tw`mt-4 border-b-2 border-b-[#2FC8B3] mx-5 py-6`}>
                        <View className="flex-row">
                            <Image source={require("./../../assets/Rectangle645.png")} style={tw`w-28 h-28 rounded-xl`} />
                            <View style={tw`ml-5 flex-row justify-between items-center flex-1`}>
                                <View>
                                    <Text style={tw`capitalize text-xl font-bold`}>Ladies Summer Collection</Text>
                                    <View style={tw`flex-row py-3`}>
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                    </View>
                                    <View style={tw`flex-row`}>
                                        <Text style={tw`text-base font-semibold `}>12</Text>
                                        <Text style={tw`text-base font-semibold ml-1 capitalize`}>reviews</Text>
                                    </View>
                                </View>
                                <AntDesign name="right" size={38} color="black" />
                            </View>
                        </View>
                    </View>

                    <View style={tw`mt-4 border-b-2 border-b-[#2FC8B3] mx-5 py-6`}>
                        <View className="flex-row">
                            <Image source={require("./../../assets/Rectangle644.png")} style={tw`w-28 h-28 rounded-xl`} />
                            <View style={tw`ml-5 flex-row justify-between items-center flex-1`}>
                                <View>
                                    <Text style={tw`capitalize text-xl font-bold`}>Boys T Shirts</Text>
                                    <View style={tw`flex-row py-3`}>
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                    </View>
                                    <View style={tw`flex-row`}>
                                        <Text style={tw`text-base font-semibold `}>35</Text>
                                        <Text style={tw`text-base font-semibold ml-1 capitalize`}>reviews</Text>
                                    </View>
                                </View>
                                <AntDesign name="right" size={38} color="black" />
                            </View>
                        </View>
                    </View>

                    <View style={tw`mt-4 border-b-2 border-b-[#2FC8B3] mx-5 py-6`}>
                        <View className="flex-row">
                            <Image source={require("./../../assets/Rectangle644.png")} style={tw`w-28 h-28 rounded-xl`} />
                            <View style={tw`ml-5 flex-row justify-between items-center flex-1`}>
                                <View>
                                    <Text style={tw`capitalize text-xl font-bold`}>Boys T Shirts</Text>
                                    <View style={tw`flex-row py-3`}>
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                    </View>
                                    <View style={tw`flex-row`}>
                                        <Text style={tw`text-base font-semibold `}>35</Text>
                                        <Text style={tw`text-base font-semibold ml-1 capitalize`}>reviews</Text>
                                    </View>
                                </View>
                                <AntDesign name="right" size={38} color="black" />
                            </View>
                        </View>
                    </View>

                    <View style={tw`mt-4 border-b-2 border-b-[#2FC8B3] mx-5 py-6`}>
                        <View className="flex-row">
                            <Image source={require("./../../assets/Rectangle644.png")} style={tw`w-28 h-28 rounded-xl`} />
                            <View style={tw`ml-5 flex-row justify-between items-center flex-1`}>
                                <View>
                                    <Text style={tw`capitalize text-xl font-bold`}>Boys T Shirts</Text>
                                    <View style={tw`flex-row py-3`}>
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                    </View>
                                    <View style={tw`flex-row`}>
                                        <Text style={tw`text-base font-semibold `}>35</Text>
                                        <Text style={tw`text-base font-semibold ml-1 capitalize`}>reviews</Text>
                                    </View>
                                </View>
                                <AntDesign name="right" size={38} color="black" />
                            </View>
                        </View>
                    </View>

                    <View style={tw`mt-4 border-b-2 border-b-[#2FC8B3] mx-5 py-6`}>
                        <View className="flex-row">
                            <Image source={require("./../../assets/Rectangle644.png")} style={tw`w-28 h-28 rounded-xl`} />
                            <View style={tw`ml-5 flex-row justify-between items-center flex-1`}>
                                <View>
                                    <Text style={tw`capitalize text-xl font-bold`}>Boys T Shirts</Text>
                                    <View style={tw`flex-row py-3`}>
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                    </View>
                                    <View style={tw`flex-row`}>
                                        <Text style={tw`text-base font-semibold `}>35</Text>
                                        <Text style={tw`text-base font-semibold ml-1 capitalize`}>reviews</Text>
                                    </View>
                                </View>
                                <AntDesign name="right" size={38} color="black" />
                            </View>
                        </View>
                    </View>

                    <View style={tw`mt-4 border-b-2 border-b-[#2FC8B3] mx-5 py-6`}>
                        <View className="flex-row">
                            <Image source={require("./../../assets/Rectangle644.png")} style={tw`w-28 h-28 rounded-xl`} />
                            <View style={tw`ml-5 flex-row justify-between items-center flex-1`}>
                                <View>
                                    <Text style={tw`capitalize text-xl font-bold`}>Boys T Shirts</Text>
                                    <View style={tw`flex-row py-3`}>
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                    </View>
                                    <View style={tw`flex-row`}>
                                        <Text style={tw`text-base font-semibold `}>35</Text>
                                        <Text style={tw`text-base font-semibold ml-1 capitalize`}>reviews</Text>
                                    </View>
                                </View>
                                <AntDesign name="right" size={38} color="black" />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaWrapper >

    )
}

export default ProductScreen