import React from 'react'

const FallbackIcon = ({ size, color, borderRadius }) => {
    
    const svgBorderRadius = (size * borderRadius / 24)

    return (
        <svg width={size} height={size} fill={color} style={{ borderRadius: svgBorderRadius }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Banco</title>
            <desc>ícone representando um banco.</desc>
            <path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V24H24V0ZM20.7115 9.17332C21.2572 9.57118 20.9767 10.4343 20.305 10.4343H18.957V18.5654H20.5224C20.618 18.5654 20.6963 18.6436 20.6963 18.7393V19.8698C20.6963 19.9655 20.618 20.0438 20.5224 20.0438H3.47753C3.38187 20.0438 3.3036 19.9655 3.3036 19.8698V18.7393C3.3036 18.6436 3.38187 18.5654 3.47753 18.5654H5.04287V10.4343H3.69711C3.02314 10.4343 2.74269 9.569 3.28838 9.17332L11.5912 3.13371C11.7098 3.04683 11.853 3 11.9999 3C12.1469 3 12.2901 3.04683 12.4087 3.13371L20.7115 9.17332ZM6.60821 18.5654H9.15189V10.4343H6.60821V18.5654ZM10.7172 18.5654H13.2609V10.4343H10.7172V18.5654ZM14.8263 18.5654H17.3917V10.4343H14.8263V18.5654Z" />
        </svg>
    )
}

FallbackIcon.defaultProps = {
    color: "#3F3F40"
}

export default FallbackIcon;