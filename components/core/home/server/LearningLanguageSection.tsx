import React from 'react';
import { HiglightText } from './HiglightText';
import know_your_progress from '@/assets/Images/Know_your_progress.png';
import compare_with_others from '@/assets/Images/Compare_with_others.png';
import plan_your_lesson from '@/assets/Images/Plan_your_lessons.png';
import { Button } from '../client/Button';
import Image from 'next/image';

export const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
        <div className='flex flex-col gap-5 items-center'>
            <div className='text-4xl font-semibold text-center'>
                Your Swiss Knife for
                <HiglightText text={" learning any language"} />
            </div>

            <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-row items-center justify-center mt-5'>
                <Image src={know_your_progress} alt='know your progress' className='object-contain -mr-32 ' />
                <Image src={compare_with_others} alt='compare with others' className='object-contain' />
                <Image src={plan_your_lesson} alt='plan your lesson' className='object-contain -ml-36' />
            </div>

            <div className='w-fit'>
                <Button active={true} linkto='/signup'>
                    <div>
                        Learn more
                    </div>
                </Button>
            </div>
        </div>
    </div>
  )
}
