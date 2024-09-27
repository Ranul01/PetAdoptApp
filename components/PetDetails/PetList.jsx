import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import PetInfo from './PetInfo'

//This page is for adding favorites
//This is not completed and it is not working so find a way to do it later
export default function PetList() {

    const [favourites, setFavourites] = useState([])

    const pets = []

    const toggleFavourite = (pet) => {
        if (favourites.includes(pet)) {
            setFavourites(favourites.filter(favPet => favPet !== pet))
        } else {
            setFavourites([...favourites, pet])
        }
    }
    return (
        <View>
            <FlatList
                data={pets}
                renderItem={({ item }) => (
                    <PetInfo
                        pet={item}
                        toggleFavourite={toggleFavourite}
                        isFavourite={favourites.includes(item)}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}