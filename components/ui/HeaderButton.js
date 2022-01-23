import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import {HeaderButton} from "react-navigation-header-buttons";

import colors from '../../assets/common/colors';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={colors.transparent} />
    )
}

export default CustomHeaderButton;
