import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import PetInfo from '../../components/PetDetails/PetInfo'
import PetSubInfo from '../../components/PetDetails/PetSubInfo'
import AboutPet from '../../components/PetDetails/AboutPet'
import OwnerInfo from '../../components/PetDetails/OwnerInfo'
import { TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'

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
            <ScrollView>
                {/* pet info */}
                <PetInfo pet={pet} />

                {/* pet subInfo */}
                <PetSubInfo pet={pet} />

                {/* about */}
                <AboutPet pet={pet} />

                {/* owner details */}
                <OwnerInfo pet={pet} />
                <View style={{
                    height: 70
                }}></View>

            </ScrollView>
            {/* adoptme button */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.adoptBtn}>
                    <Text style={{
                        fontFamily: 'outfit-medium',
                        textAlign: 'center',
                        fontSize: 20
                    }}>Adopt Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    adoptBtn: {
        padding: 15,
        backgroundColor: Colors.PRIMARY
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    }
})