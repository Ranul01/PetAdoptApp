import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirebseConfig'
import { FlatList } from 'react-native'

export default function Slider() {

    const sliderList2 = [
        { id: 1, image: require('../../assets/images/slider1.jpg') },
        { id: 2, image: require('../../assets/images/slider2.jpg') },
    ]

    // const [sliderList, setSilerList] = useState([])

    // useEffect(() => {
    //     GetSliders()
    // }, [])

    // const GetSliders = async () => {
    //     setSilerList([])
    //     const snapshot = await getDocs(collection(db, 'Sliders'))
    //     snapshot.forEach((doc) => {
    //         console.log(doc.data())
    //         setSilerList(sliderList => [...sliderList, doc.data()])
    //     })
    // }
    return (
        <View style={{
            marginTop: 15
        }}>
            <FlatList
                data={sliderList2}
                horizontal={true}
                //showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View>
                        <Image source={item.image}
                            style={styles?.sliderImage}
                        />
                    </View>

                )}
            // renderItem={({ item, index }) => (
            //     <View>
            //         <Image source={{ uri: item?.imageUrl }}
            //             style={styles?.sliderImage}
            //         />
            //     </View>

            // )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderImage: {
        width: Dimensions.get('window').width * 0.9, //use screen if it is not working properly in the phone
        height: 160,
        borderRadius: 15,
        marginRight: 15
    }
})  