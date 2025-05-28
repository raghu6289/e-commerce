import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Photo"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <b className="text-gray-800">
            Welcome to Trendify Hair Care, where luxury meets nourishment.
          </b>
          <p>
            At Trendify, we believe that your hair deserves the best—nourishing
            oils and ingredients that bring out its natural shine and vitality.
            Our mission is to bring you the finest hair care products that not
            only restore and protect your hair but also enhance your confidence
            with every use..
          </p>
          <p>
            Our hair oils are carefully crafted with premium, natural
            ingredients to suit all hair types, from dry and damaged to thick
            and frizzy. We prioritize quality, ensuring that every drop of oil
            works in harmony to give you the healthy, glossy hair you’ve always
            dreamed of. Trendify is your trusted partner in the pursuit of hair
            perfection.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Trendify, our mission is to empower you with healthy, radiant
            hair. We offer a selection of carefully curated hair oils that
            rejuvenate, repair, and nourish your hair, helping you achieve
            beautiful, glossy locks that reflect your inner confidence.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            At Trendify, our vision is to be the global leader in hair care,
            celebrated for our commitment to quality, sustainability, and
            innovation. We aim to inspire self-expression through healthy,
            beautiful hair, making Trendify the ultimate choice for your hair
            care routine.
          </p>
        </div>
      </div>
      <div className="py-4 text-xl">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At Trendify, quality comes first. Every product is carefully chosen
            and inspected to meet our high standards. Shop with confidence,
            knowing we ensure excellence in every detail.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Convenience</b>
          <p className="text-gray-600">
            Trendify ensures a smooth shopping experience with easy browsing,
            fast shipping, simple returns, and multiple payment options. Your
            comfort and satisfaction are our priorities.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            At Trendify, exceptional service is our promise. Our dedicated
            support team is here to assist you with any questions or concerns,
            ensuring a smooth and satisfying shopping experience.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
