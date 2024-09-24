import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';

export default function OwnerInfo({ pet }) {
    return (
        <View style={{
            paddingHorizontal: 20,
            marginHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            borderWidth: 1,
            borderRadius: 15,
            padding: 20,
            backgroundColor: Colors.WHITE,
            justifyContent: 'space-between',
            borderColor: Colors.PRIMARY
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20
            }}>
                <Image
                    source={{ uri: pet?.userImage }}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 99
                    }}
                />

                <View>
                    <Text style={{
                        fontFamily: 'outfit-medium',
                        fontSize: 17
                    }}>{pet?.username}</Text>

                    <Text style={{
                        fontFamily: 'outfit',
                        color: Colors.GRAY
                    }}>Pet Owner</Text>
                </View>
            </View>
            <Feather name="send" size={24} color={Colors.PRIMARY} />
        </View>
    )
}