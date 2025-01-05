import React from 'react';
import Title from '../../atoms/Title';
import Description from '../../atoms/Description';
import { useInView, motion } from 'framer-motion';
import { fadeUpVariants } from '@/app/lib/constants';

const Team = () => {
  const harmonyRef = React.useRef(null);
  const isInViewHarmony = useInView(harmonyRef, { once: true });
  const teamsRef = React.useRef(null);
  const isInViewTeams = useInView(teamsRef, { once: true });
  const alchemyRef = React.useRef(null);
  const isInViewAlchemy = useInView(alchemyRef, { once: true });

  return (
    <section className="border-b-2 border-[#EBECEF]" id="teams">
      <section
        ref={harmonyRef}
        id="harmony"
        className="py-8 2xl:py-20"
      >
        <div className="container mx-auto px-6 2xl:px-16">
          <motion.div
            initial="hidden"
            animate={isInViewHarmony ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center justify-between gap-10 w-full"
          >
            <div className="flex flex-col gap-4 2xl:gap-8 items-start justify-center">
              <Title
                content="Enjoy the harmony of the team"
                classname="text-[36px] leading-[44px] 2xl:text-[70px] 2xl:leading-[80px]"
              />
              <Description
                classname="text-[18px] leading-6 2xl:text-[24px] 2xl:leading-10"
                content="Collaboration becomes a breeze as you and your team seamlessly work together in real time. Share, chat, and conquer projects with ease."
              />
              <div>
                <ul className="list-disc list-inside">
                  <li className="font-medium text-sm 2xl:text-[20px] leading-4 2xl:leading-7 mb-1">
                    Live Updates
                  </li>
                  <li className="font-medium text-sm 2xl:text-[20px] leading-4 2xl:leading-7 mb-1">
                    Notifications
                  </li>
                  <li className="font-medium text-sm 2xl:text-[20px] leading-4 2xl:leading-7 mb-1">
                    Easy to Upload
                  </li>
                  <li className="font-medium text-sm 2xl:text-[20px] leading-4 2xl:leading-7 mb-1">
                    Easy to do Reference
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:block w-full">
              <img src="/harmony.avif" alt="team" />
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="team"
        ref={teamsRef}
        className="py-8 2xl:py-20 bg-[#F3F8FF]"
      >
        <div className="container mx-auto px-6 2xl:px-16">
          <motion.div
            initial="hidden"
            animate={isInViewTeams ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center justify-between gap-4 lg:gap-12 w-full"
          >
            <div className="hidden lg:block w-full">
              <img src="/team.avif" alt="team" />
            </div>
            <div className="flex flex-col gap-4 2xl:gap-8 items-start justify-center">
              <Title
                content="We craft tailored in perfection"
                classname="text-[36px] leading-[44px] 2xl:text-[70px] 2xl:leading-[80px]"
              />
              <Description
                classname="text-[18px] leading-6 2xl:text-[24px] 2xl:leading-10"
                content="It's your business, your rules. Customize fields, templates, and workflows to make our SaaS your own work of art"
              />
              <div className="flex flex-col items-start gap-3 2xl:gap-8 justify-center">
                <div className="border-b-2 border-b-[#EBECEF pb-3 2xl:pb-8">
                  <div className="flex justify-between items-start">
                    <div className="w-full">
                      <Title
                        content="Easy to use"
                        classname="font-medium text-sm 2xl:text-[20px] leading-relaxed"
                      />
                    </div>
                    <div className="w-full">
                      <Description
                        content="Experience the power of simplicity with our easy-to-use solution"
                        classname="text-[14px] 2xl:text-[16px] leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-b-[#EBECEF pb-3 2xl:pb-8">
                  <div className="flex justify-between items-start">
                    <div className="w-full">
                      <Title
                        content="Precise Solution"
                        classname="font-medium text-sm 2xl:text-[20px] leading-relaxed"
                      />
                    </div>
                    <div className="w-full">
                      <Description
                        content="Provide you with a seamless experience that adapts and evolves"
                        classname="text-[14px] 2xl:text-[16px]  leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-b-[#EBECEF pb-3 2xl:pb-8">
                  <div className="flex justify-between items-start">
                    <div className="w-full">
                      <Title
                        content="Updated Technology"
                        classname="font-medium text-sm 2xl:text-[20px] leading-relaxed"
                      />
                    </div>
                    <div className="w-full">
                      <Description
                        content="Say hello to the future of innovation, where every click brings to your goals"
                        classname="text-[14px] 2xl:text-[16px] leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        ref={alchemyRef}
        id="alchemy"
        className="py-8 2xl:py-20"
      >
        <div className="container mx-auto px-6 2xl:px-16">
          <motion.div
            initial="hidden"
            animate={isInViewAlchemy ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center justify-between gap-4 2xl:gap-12 w-full"
          >
            <div className="flex flex-col gap-4 2xl:gap-8 items-start justify-center">
              <Title
                content="Data alchemy for your business"
                classname="text-[36px] leading-[44px] 2xl:text-[70px] 2xl:leading-[80px]"
              />
              <Description
                classname="text-[18px] leading-6 2xl:text-[24px] 2xl:leading-10"
                content="Turn raw data into gold with our analytics and reporting tools. Illuminate your path to success with insightful, real-time information"
              />
            </div>
            <div className="hidden lg:block w-full">
              <img src="/harmony.avif" alt="team" />
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Team;
