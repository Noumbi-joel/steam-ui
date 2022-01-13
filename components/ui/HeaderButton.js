import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import {HeaderButton} from "react-navigation-header-buttons";

import React from 'react'

const HeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconsSize={23} color="#fff" />
    )
}

export default HeaderButton;
