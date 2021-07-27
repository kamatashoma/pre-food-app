import React from 'react'
import { View,Text,Image,StyleSheet } from 'react-native'
import {Stars} from './Stars'
/* types */
import  {Shop} from '../types/shops

type Props = {
    shop:Shop
}

export const ShopDetail:React.FC<Props> = ({shop}:Props) => {
    const {name,place,imageUrl,score} = shop;
    return(
        
    )
}