import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import PetSubInfoCard from './PetSubInfoCard'

export default function PetSubInfo({ pet }) {
    return (
        <View style={{
            padding: 20
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: Colors.WHITE,
                    padding: 10,
                    margin: 5,
                    borderRadius: 8,
                    gap: 10,
                    flex: 1
                }}>
                    <Image
                        source={require('../../assets/images/calendar.png')}
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />

                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{
                            fontFamily: 'outfit'
                        }}>Age</Text>

                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 20
                        }}>{pet?.age}</Text>
                    </View>
                </View>

                {/* adding the details using pet sub info card */}

                <PetSubInfoCard
                    icon={require('../../assets/images/bone.png')}
                    title={'Breed'}
                    value={pet?.breed}
                />
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <PetSubInfoCard
                    icon={require('../../assets/images/sex.png')}
                    title={'Sex'}
                    value={pet?.sex}
                />
                <PetSubInfoCard
                    icon={require('../../assets/images/weight.png')}
                    title={'Weight'}
                    value={pet?.weight}
                />
            </View>
        </View>
    )
}