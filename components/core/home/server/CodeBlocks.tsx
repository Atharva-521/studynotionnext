import React from 'react'
import { Button } from '../client/Button'
import { FaArrowRight } from 'react-icons/fa'
import { TypeAnim } from '../client/TypeAnim'

export const CodeBlocks = ({position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor}: {position: string, heading: React.ReactNode, subheading: string, ctabtn1: {
    active: boolean,
    linkto: string,
    buttonText: string
}, ctabtn2: {
    active: boolean,
    linkto: string,
    buttonText: string
}, codeblock: string, backgroundGradient: string, codeColor: string}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-9`}>
        {/* section 1 */}
        <div className='w-[45%] flex flex-col gap-8'>
            
            {heading}
            <div className='text-richblack-300 font-bold'>
                {subheading}
            </div>

            <div className='flex gap-7 mt-7'>
                <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className='flex items-center gap-2'>
                        {ctabtn1.buttonText}
                        <FaArrowRight />
                    </div>
                </Button>

                <Button active={ctabtn2.active} linkto={ctabtn2.linkto}>
                    {ctabtn2.buttonText}
                </Button>
            </div>
        </div>

        {/* section 2 */}
        <div className='h-fit flex flex-row text-10 w-[100%] py-4 lg:w-[500px] bg-linear-code stroke-richblack-500 relative'>
            <div className={`absolute z-[0] ${backgroundGradient}  w-[90%] h-[90%] rounded-[50%] -top-[10%] -left-[10%] blur-xl`}>
                hello
            </div>
            <div className=' z-[1] text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>

            <div className={` z-[1] w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
                <TypeAnim codeblock={codeblock} />  
            </div>
        </div>
    </div>
  )
}
