import React from 'react'

export default function CommonBtn({ className, padding, border, borderRadius, fontSize, backgroundColor, buttonText }) {
    return (
        <div>
            <button className={`btn ${className}`}
                style={{
                    padding: padding,
                    border: border,
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                    backgroundColor: backgroundColor
                }}
            >
                {buttonText || 'search'}
            </button>
        </div>
    )
}
