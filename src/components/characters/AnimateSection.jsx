"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

const AnimateSection = () => {
  const details = [
    {
      id: 1,
      status: "Release Date",
      description: "November 23, 2016 (USA)",
    },
    {
      id: 2,
      status: "Genre",
      description: "Family , Adventure",
    },
    {
      id: 3,
      status: "Sequel",
      description: "Moana2",
    },
    {
      id: 4,
      status: "Runtime",
      description: "1h 47m",
    },
    {
      id: 5,
      status: "IMDB Rating",
      description: "7.6/10",
    },
  ];

  return (
    <>
      <section className="px-5 xl:px-0 py-10">
        <PageLayout>
          <div className="flex max-w-6xl mx-auto items-center">
            <div className="w-1/2 relative px-4">
              <div className="absolute top-0  left-0 -translate-y-full -translate-x-full">
                <Image
                  src={Sun}
                  width={500}
                  height={500}
                  alt="starfish"
                  className="size-14 object-cover object-center  "
                />
              </div>
              <div className="flex items-center gap-5">
                <h1 className="mb-5 text-gradient uppercase font-heading text-6xl">
                  Moana
                </h1>
                <Image
                  src={StarFish}
                  width={500}
                  height={500}
                  alt="starfish"
                  className="size-14 -mt-20 "
                />
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop
                navigation={{
                  prevEl: ".prevEl",
                  nextEl: ".nextEl",
                  clickable: true,
                }}
                modules={[Navigation]}
                effect="fade"
                className="space-y-5"
              >
                <ul className=" mb-5 flex flex-col gap-3  leading-8 text-lg">
                  <SwiperSlide>
                    {details.map((detail) => (
                      <MoanaDetail key={detail.id} {...detail} />
                    ))}
                  </SwiperSlide>
                  <SwiperSlide>
                    <MoanaDetail status="Release" description="November" />
                    <MoanaDetail status="Genre" description="Family " />
                    <MoanaDetail status="gg" description="ff" />
                    <MoanaDetail status="cc" description="1h dd" />
                    <MoanaDetail status="ee" description="ggg" />
                  </SwiperSlide>
                </ul>
              </Swiper>
            </div>
            <div className="w-1/2  flex justify-center">
              <div className="relative w-full h-[500px]">
                <Image
                  src={BgFrame}
                  width={1000}
                  height={1000}
                  alt="frame"
                  className="w-[500px] h-full rounded-full absolute top-0 left-0 "
                />
                <Swiper
                  slidesPerView={1}
                  spaceBetween={50}
                  loop
                  navigation={{
                    prevEl: ".prevEl",
                    nextEl: ".nextEl",
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  effect="fade"
                  className="w-2/3 right-8   absolute -bottom-12   "
                >
                  {/* className="absolute bottom-4  w-2/3 right-28 " */}

                  <SwiperSlide>
                    <Image
                      className="w-2/3 mx-auto "
                      src={Grandma}
                      width={500}
                      height={500}
                      alt="Maui"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      className="w-full "
                      src={Maui}
                      width={500}
                      height={500}
                      alt="Maui"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      className="w-3/5 mx-auto"
                      src={Moana}
                      width={500}
                      height={500}
                      alt="Maui"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="prevEl">
              <OutlineButton>Back </OutlineButton>
            </div>
            <div className="nextEl">
              <PrimaryButton> Next </PrimaryButton>
            </div>
          </div>
        </PageLayout>
      </section>
      <MoanaSailBoat />


      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 absolute z-10 top-0 right-0">
        <div className="max-w-6xl">
          {castMembers.map((member) => (
            <div className=" flex gap-20" key={member.id}>

              {/* characters photos */}
              <div className="gap-10 ms-20">
                <Image src={member.img} alt="character" width={700} height={100} />
                <Image
                  src={underwave}
                  alt="wave"
                  width={200}
                  height={10}
                  className="h-12 -mt-4"
                />
              </div>
              {/* Character Info */}
              <div className=" mt-20">
                <h1 className="text-6xl font-bold text-gradient tracking-wide font-heading">
                  MOANA
                </h1>
                {/* <h2>{member.name}</h2> */}
                <p className=" text-neutral-700 font-label line-clamp-4">
                  {member.description}
                </p>
                {/* Character Info */}
                <div className="flex gap-10 mt-5">
                  <div>
                    <h2 className="text-2xl font-semibold font-san">Type</h2>
                    <p className="text-neutral-600">Human</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold font-san">Role</h2>
                    <p className="text-neutral-600">Hero</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold font-san">Gender</h2>
                    <p className="text-neutral-600">Female</p>
                  </div>
                </div>
                {/* Navigation */}
                <div className="flex gap-4 pt-4">
                  <OutlineButton>Back</OutlineButton>
                  <PrimaryButton>Next</PrimaryButton>
                </div>
              </div>

              
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default AnimateSection;
