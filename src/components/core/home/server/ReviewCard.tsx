import React from "react"
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";


export const ReviewCard = ({pic, name, email, review, rating} : any) => {

    let tempRating = rating ? rating : 0;
    let fullStars = rating/1;
    let halfStars = rating%1;
    return(
        <div className="bg-richblack-800 p-2 flex flex-col gap-4 items-start w-[25%]">
            <div className="flex flex-row items-center gap-4">
                {/* profile pic */}
                <div className="w-10 h-10 rounded-full bg-white">
                    
                </div>

                {/* name and email */}
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-richblack-600">{email}</p>
                </div>
            </div>

            {/* review */}
            <div>
                <p className="text-richblack-25">
                    {review}
                </p>
            </div>

            {/* rating */}
            <div className="flex items-center gap-2 text-yellow-50">
                {/* rating */}
                <div>
                    {rating}
                </div>

                {/* star */}
                <div className="flex gap-2 text-xl">
                    {
                        Array.from({length: Math.floor(fullStars)}).map((element, index) => (
                            <IoIosStar key={index} />
                        ))
                    }
                    {
                        halfStars > 0 && <IoIosStarHalf />
                    }
                    {
                        Array.from({length: 5 - Math.ceil(rating)}).map((element, index) => (
                            <IoIosStarOutline key={index} />
                        )) 
                    }
                </div>
            </div>
            
        </div>
    )
}