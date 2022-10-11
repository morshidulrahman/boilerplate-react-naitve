import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import tw from 'twrnc';

const Shirtreview = () => {

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
                    <Text style={tw`flex-1 text-center text-xl capitalize text-[#979797]`}>Ladies Shirts Review</Text>
                </View>
                <View style={tw`mt-4 border-b-2 border-b-[#2FC8B3] mx-5 py-5`}>
                    <View className="flex-row">
                        <Image source={require("./../../assets/Rectangle.png")} style={tw`w-28 h-28 rounded-xl`} resizeMode="cover" />
                        <View style={tw`mt-6`}>
                            <View style={tw`flex-row`}>
                                <View style={tw`flex-row ml-5`}>
                                    <Foundation name="star" size={24} color="#FFFD54" />
                                    <Foundation name="star" size={24} color="#FFFD54" />
                                    <Foundation name="star" size={24} color="#FFFD54" />
                                    <Foundation name="star" size={24} color="#FFFD54" />
                                    <Foundation name="star" size={24} color="#FFFD54" />
                                </View>
                                <Text style={tw`text-base font-bold ml-1`}>(5)</Text>
                            </View>
                            <View style={tw`flex-row ml-5 mt-2`}>
                                <Text style={tw`text-xl font-semibold `}>2</Text>
                                <Text style={tw`text-xl font-semibold ml-2 capitalize`}>reviews</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={tw`mt-8 border py-5 px-2 border-gray-300 mx-5 rounded-lg overflow-hidden`}>
                    <View style={tw`flex-row border-b-2 border-gray-400 pb-10`}>
                        <Image source={require("./../../assets/Ellipse29.png")} style={tw`w-[64px] h-[64px] rounded-full`} resizeMode="cover" />
                        <View>
                            <View style={tw`flex-row justify-between ml-4 w-[350px]`}>
                                <Text style={tw`capitalize text-xl font-bold`}>alice dea</Text>
                                <View style={tw`flex-row`}>
                                    <View style={tw`flex-row ml-5`}>
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                    </View>
                                    <Text style={tw`text-base font-bold ml-1`}>(5)</Text>
                                </View>
                            </View>
                            <View style={tw`w-[320px] ml-5 mt-4`} >
                                <Text style={tw`text-base font-semibold`}>Like, the way you present all productsall items are too good, I like all Summer colors.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={tw`flex-row mt-8`}>
                        <Image source={require("./../../assets/Ellipse28.png")} style={tw`w-[64px] h-[64px] rounded-full`} resizeMode="cover" />
                        <View>
                            <View style={tw`flex-row justify-between ml-4 w-[350px]`}>
                                <Text style={tw`capitalize text-xl font-bold`}>emila jhon</Text>
                                <View style={tw`flex-row`}>
                                    <View style={tw`flex-row ml-5`}>
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                        <Foundation name="star" size={24} color="#FFFD54" />
                                    </View>
                                    <Text style={tw`text-base font-bold ml-1`}>(5)</Text>
                                </View>
                            </View>
                            <View style={tw`w-[320px] ml-5 mt-4`} >
                                <Text style={tw`text-base font-semibold`}>Like, the way you present all productsall items are too good, I like all Summer colors,Also Seller give huge dicont on such expensive.I appreciate that.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaWrapper>

    )
}

export default Shirtreview