import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import PetInfo from '../../components/PetDetails/PetInfo'

export default function PetDetails() {

    const pet = useLocalSearchParams()
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: ' '
        })
    })

    return (
        <View>
            {/* pet info */}
            <PetInfo pet={pet} />

            {/* pet properties */}

            {/* about */}

            {/* owner details */}

            {/* adoptme button */}
        </View>
    )
}