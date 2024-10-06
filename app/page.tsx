import { HiglightText } from "@/components/core/home/server/HiglightText";
import Link from "next/link";
import Router from "next/router";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/core/home/client/Button";
import banner from "@/assets/Images/banner.mp4";
import { CodeBlocks } from "@/components/core/home/server/CodeBlocks";
import { TimelineSection } from "@/components/core/home/server/TimelineSection";
import { LearningLanguageSection } from "@/components/core/home/server/LearningLanguageSection";

export default function Home() {
  return (
    <div>
      {/* section 1 */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between"
      >
        <Link href={"/signup"}>
          <div className=" group bg-richblack-800 rounded-full mt-16 mx-auto text-richblack-200 transition-all duration-200 hover:scale-95 w-fit border-b-[1px] ">
            <div className="flex items-center gap-2 px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with
          <HiglightText text={"Coding Skills"} />
        </div>

        <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex gap-6 mt-10">
          <Button linkto={"/"} active={true}>
            Learn More
          </Button>

          <Button linkto={"/"} active={false}>
            Book a Demo
          </Button>
        </div>

        <div className="mx-auto my-12  w-[85%] h-[40%] relative">
          <div className="bg-[radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(250,244,244,1) 0%, rgba(0,212,255,1) 100%)] w-[60%] h-[60%]"></div>
          <video autoPlay muted loop className="shadow-white-shadow">
            <source src={banner} type="video/mp4" />
          </video>
        </div>

        {/* code section 1 */}
        <div>
        <CodeBlocks
            position={'lg:flex-row'}
            heading={
              <div className={"text-4xl font-semibold"}>
                Unlock your
                <HiglightText text={"coding potential"} />
                with our online courses
              </div>
            }
            subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            ctabtn1={{
              active: true,
              linkto: "/signup",
              buttonText: "Try it yourself",
            }}
            ctabtn2={{
              active: false,
              linkto: "/login",
              buttonText: "learn more",
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>/n</h1>/n<nav><a href="one/">One</a><a href="two/">Two</a>\n<a href="three/">Three</a>\n</nav>`}
            codeColor="text-yellow-25"
            backgroundGradient={'bg-elipse-code'}
          />
        </div>
        {/* code section 2 */}
        <div>
          <CodeBlocks
            position={'lg:flex-row-reverse'}
            heading={
              <div className={"text-4xl font-semibold"}>
                Start
                <HiglightText text={"coding in seconds"} />
              </div>
            }
            subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            ctabtn1={{
              active: true,
              linkto: "/signup",
              buttonText: "Try it yourself",
            }}
            ctabtn2={{
              active: false,
              linkto: "/login",
              buttonText: "learn more",
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>/n</h1>/n<nav><a href="one/">One</a><a href="two/">Two</a>\n<a href="three/">Three</a>\n</nav>`}
            codeColor="text-yellow-25"
            backgroundGradient={'bg-elipse-blue'}
          />
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
            <div className="homepage_bg h-[310px]">
              <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
              <div className="h-[150px]"></div>

              {/* buttons */}
              <div className="flex flex-row gap-7 text-white">
                    <Button active={true} linkto={'/signup'}>
                      <div className="flex items-center gap-3">
                        Explore Full Catalog
                        <FaArrowRight />
                      </div>
                    </Button>

                    <Button active={false} linkto={'/signup'}>
                      Learn More
                    </Button>
              </div>

              </div>

            </div>

            <div className="mx-auto w-11/12 max-w-maxContent flex flex-col justify-between gap-7">
            <div className="flex flex-row justify-between mb-10 mt-[95px]">
              <div className="text-4xl font-semibold w-[45%]">
                Get the Skills you need for a
                <HiglightText text={"Job that is in demand"} />
              </div>

              <div className="flex flex-col gap-10 w-[40%] items-start">
                <div className="text-[16px]">
                  The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                </div>

                <Button active={true} linkto="/signup">
                  <div>
                    Learn More
                  </div>
                </Button>
              </div>
            </div>
            
            <TimelineSection />
            <LearningLanguageSection />
            </div>
      </div>

      {/* section 3 */}
    </div>
  );
}
