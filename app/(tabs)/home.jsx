import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PetListByCategory from '../../components/Home/PetListByCategory'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

export default function Home() {
    return (
        <View style={{
            padding: 20,
            marginTop: 20
        }}>
            {/*Header*/}
            <Header />

            {/*Slider*/}
            <Slider />

            {/*List of pets and Category*/}
            <PetListByCategory />

            {/*Add new pet option*/}
            <Link href={'/add-new-pet'}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    gap: 20,
                    marginTop: 20,
                    backgroundColor: Colors.LIGHT_PRIMARY,
                    borderWidth: 1,
                    borderColor: Colors.PRIMARY,
                    borderRadius: 15,
                    borderStyle: 'dashed',
                }}>
                <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} />
                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.PRIMARY
                }}>Add new pet</Text>
            </Link>
        </View>
    )
}