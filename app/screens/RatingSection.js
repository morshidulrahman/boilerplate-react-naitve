import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import { AntDesign, Foundation } from '@expo/vector-icons';
import tw from 'twrnc';
const RatingSection = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <SafeAreaWrapper style={tw`flex-1 bg-white`}>
            <View style={tw`flex-1`}>
                <View style={tw`flex flex-row p-5 items-center mt-6`}>
                    <TouchableOpacity>
                        <AntDesign name="arrowleft" size={28} color="#979797" />
                    </TouchableOpacity>
                    <Text style={tw`flex-1 text-center text-xl capitalize text-[#979797]`}>Ladies Shirts Review</Text>
                </View>
                <View style={tw`border-b-2 border-[#2FC8B3] mx-5 pb-5`}>
                    <Rating
                        type='star'
                        ratingColor='#3498db'
                        ratingBackgroundColor='#c8c7c8'
                        ratingCount={5}
                        imageSize={30}
                        style={{ paddingVertical: 10 }}
                    />
                </View>
                <View style={tw`mx-5 mt-10`}>
                    <TextInput

                        style={[tw`border  rounded-lg border-gray-400 p-5 `, {
                            height: 280,
                            textAlignVertical: 'top',
                        }]}
                        placeholder="Write your review here.........."
                    />
                </View>
                <View style={[tw`items-center justify-center mt-36`, { flexGrow: 1 }]}>
                    <TouchableOpacity style={tw`items-center justify-center h-20 w-20 rounded-full bg-[#2FC8B3]`}>
                        <AntDesign name="arrowright" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={tw`text-2xl font-bold capitalize pt-24`}>skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaWrapper>

    )
}

export default RatingSection