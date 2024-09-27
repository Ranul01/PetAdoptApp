import { View, Text, Image, TextInput, StyleSheet, ScrollView, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import Colors from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db, storage } from '../../config/FirebseConfig'
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export default function AddNewPet() {

    const navigation = useNavigation()
    const [formData, setFormData] = useState({
        category: 'Dogs', sex: 'Male'
    });
    const [gender, setGender] = useState();
    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [image, setImage] = useState()

    const router = useRouter()

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Add New Pet'
        })
        GetCategories()
    }, [])

    const GetCategories = async () => {
        setCategoryList([])
        const snapshot = await getDocs(collection(db, 'Category'))
        snapshot.forEach((doc) => {
            setCategoryList(categoryList => [...categoryList, doc.data()])
        })
    }

    const handleInputChange = (fieldName, fieldValue) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    const onSubmit = () => {
        if (Object.keys(formData).length != 8) {
            // ToastAndroid.show('Enter all details',ToastAndroid.BOTTOM)
            alert('Enter all details')
            return;
        }

        // const isFormInComplete = Object.values(formData).some(value => !value)
        // if (isFormInComplete) {
        //     alert('Please fill all the fields')
        //     return;
        // }

        uploadImage()
    }

    const uploadImage = async () => {
        const response = await fetch(image)
        const blobImage = response.blob()
        const storageRef = ref(storage, 'petAdopt/' + Date.now() + '.jpg')

        uploadBytes(storageRef, blobImage).then((snapshoot) => {
            console.log('File uploaded')
        }).then(response => {
            getDownloadURL(storageRef).then(async (downloadUrl) => {
                console.log(downloadUrl)
                saveFromData(downloadUrl)
            })
        })
    }

    const saveFromData = async (imageUrl) => {
        const docId = Date.now().toString()
        await setDoc(doc(db, 'Pets', docId), {
            ...formData,
            imageUrl: imageUrl,
            id: docId
        })

        router.replace('/(tabs)/home')
    }

    // used to pick images from the gallery
    const imagePicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <ScrollView style={{
            padding: 20
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20
            }}>Add New Pet</Text>

            <Pressable onPress={imagePicker}>
                {!image ? <Image
                    source={require('../../assets/images/paws.png')}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GRAY
                    }}
                /> :
                    <Image source={{ uri: image }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: Colors.GRAY
                        }}
                    />}
            </Pressable>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Pet Name*</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('name', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Pet Category*</Text>
                <Picker
                    style={styles.input}
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) => {
                        setGender(itemValue)
                        handleInputChange('category', itemValue)
                    }}
                >
                    {categoryList.map((category, index) => (
                        <Picker.Item key={index} label={category.name} value={category.name} />
                    ))}
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Breed*</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('breed', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Age*</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'
                    onChangeText={(value) => handleInputChange('age', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Gender*</Text>
                <Picker
                    style={styles.input}
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) => {
                        setGender(itemValue)
                        handleInputChange('sex', itemValue)
                    }}
                >
                    <Picker.Item label='Male' value='Male' />
                    <Picker.Item label='Female' value='Female' />
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Weight*</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'
                    onChangeText={(value) => handleInputChange('weight', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Address*</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('address', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>About*</Text>
                <TextInput
                    style={styles.input}
                    numberOfLines={5}
                    multiline={true}
                    onChangeText={(value) => handleInputChange('about', value)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={{
                    fontFamily: 'outfit',
                    textAlign: 'center',
                    fontSize: 15
                }}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 5,
        // padding: 10
    },

    input: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 7,
        fontFamily: 'outfit'
    },

    lable: {
        marginVertical: 5,
        fontFamily: 'outfit'
    },

    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        marginVertical: 10,
        marginBottom: 50
    }
})