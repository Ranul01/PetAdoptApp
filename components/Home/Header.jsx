import { View, Text } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Header() {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <View>
                <Text style={{
                    fontFamily: 'outift',
                    fontSize: 18
                }}>Welcome</Text>

                <Text style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 25
                }}>Tommy Martin</Text>
            </View>
            <EvilIcons name="user" size={50} color="black" />
        </View>
    )
}
