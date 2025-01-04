import React from 'react';
import Title from '../../atoms/Title';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const Subscription = () => {
  return (
    <section id="subscription" className="bg-[#2E2A4A] pt-16 pb-10">
      <div className="pl-[260px] flex justify-between items-center gap-16">
        <div className="flex-1 flex flex-col gap-8">
          <Title
            content="Ready to unlock the full potential?"
            size="70"
            classname="text-white"
          />

          <div className="flex gap-4 max-w-[80%] items-center border border-white bg-white py-4 px-6 rounded-xl">
            <div className="flex-1">
              <Input placeholder="Your Email Address" type="text" />
            </div>
            <Button title="Get Started" />
          </div>
        </div>
        <div>
          <img src="/hero.svg" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Subscription;
