"use client"

import { TypeAnimation } from "react-type-animation"

export const TypeAnim = ({codeblock}: {codeblock: string}) => {
    return (
        <TypeAnimation sequence={[codeblock, 2000, '']} 
                repeat={Infinity} 
                cursor={true} 
                omitDeletionAnimation={true} 
                style={
                    {
                        display: "block",
                        whiteSpace: "pre-line",
                    }
                }
                /> 
    )
}