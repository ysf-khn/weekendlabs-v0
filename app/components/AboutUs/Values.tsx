import {
  AcademicCapIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from "@heroicons/react/16/solid";
import { ChartBarIcon } from "@heroicons/react/20/solid";

export default function Values() {
  return (
    <section className="bg-black py-24 px-10">
      <div className="grid grid-rows-8 grid-cols-3 gap-8 text-black">
        <div className="row-span-4 text-[5rem] font-semibold p-8 text-white">
          Our Values
        </div>
        <div className=" bg-brandGreen p-8 rounded-3xl row-span-4">
          <p className="bg-black rounded-xl p-3 w-fit">
            <ShieldCheckIcon height={50} width={50} className="text-white" />
          </p>{" "}
          <p className="font-semibold text-5xl mt-5">Integrity</p>
          <p className="text-2xl mt-5 font-semibold">
            Building trust through honesty, transparency, and unwavering
            commitment to ethical practices.
          </p>
        </div>

        <div className=" bg-cyan-300 p-8 rounded-3xl row-span-4">
          <p className="bg-black rounded-xl p-3 w-fit">
            <ChartBarIcon height={50} width={50} className="text-white" />
          </p>
          <p className="font-semibold text-5xl mt-5">Growth</p>
          <p className="text-2xl mt-5 font-semibold">
            Fostering continuous progress to empower businesses and individuals
            to achieve their highest potential.
          </p>
        </div>
        <div className=" bg-orange-400 p-8 rounded-3xl row-span-4">
          <p className="bg-black rounded-xl p-3 w-fit">
            <RocketLaunchIcon height={50} width={50} className="text-white" />
          </p>
          <p className="font-semibold text-5xl mt-5">Innovation</p>
          <p className="text-2xl mt-5 font-semibold">
            Driving creative solutions and pioneering ideas that redefine
            boundaries and inspire meaningful change.
          </p>
        </div>
        <div className=" bg-gray-300 p-8 rounded-3xl row-span-4">
          <p className="bg-black rounded-xl p-3 w-fit">
            <TrophyIcon height={50} width={50} className="text-white" />
          </p>{" "}
          <p className="font-semibold text-5xl mt-5">Excellence</p>
          <p className="text-2xl mt-5 font-semibold">
            Delivering top-notch quality and results that consistently exceed
            expectations and set new benchmarks.
          </p>
        </div>
        <div className=" bg-yellow-300 p-8 rounded-3xl row-span-4">
          <p className="bg-black rounded-xl p-3 w-fit">
            <AcademicCapIcon height={50} width={50} className="text-white" />
          </p>
          <p className="font-semibold text-5xl mt-5">Learning</p>
          <p className="text-2xl mt-5 font-semibold">
            Embracing curiosity and growth by acquiring knowledge to refine
            skills and drive innovation.
          </p>
        </div>
      </div>

      {/* <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-1">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Our Values
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative lg:row-span-1">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Innovation
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Growth
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Integrity
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Excellence
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
          <div className="relative lg:row-span-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
