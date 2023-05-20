import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';



const Detail = () => {
    const Route = useRoute()
    const [ondatas, setOndatas] = useState({})

    const getRink = async () => {
        try {
            
            // const options = {
            //     headers: {
            //         accept: 'application/json',
            //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRkNGU3NzU2MjE5NWUzNmE4OGY3MmI4YTU2ZjQzNiIsInN1YiI6IjY0NDQ4NWE3MDU4MjI0MDJmYjMyZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiBKa57r3cJVfdbRcm9-gBXo0ToW2e_cWRGWqVx2i3M'

                
            //     }
            // }
            const options = {
                   headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer 5d4d4e77562195e36a88f72b8a56f436'
                }
              };
            // const result = await axios.get(`https://api.themoviedb.org/3/tv/${route.params.data}?language=en-US`, options)
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${Route.params.data}?language=en-US&page=1`, options)
            console.log("ddddddddddddddddddddddd", result.data)
            setOndatas(result.data)
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getRink()
    }, [])
    return (
        <View>
            <Text>
              {ondatas.title}                
            </Text>
        
        </View>
    );
};

export default Detail;