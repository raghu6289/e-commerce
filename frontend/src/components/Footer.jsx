import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/">
            <img
              src={assets.logo}
              className="w-32 mb-5 cursor-pointer"
              alt="Trendify"
            />
          </Link>
          <p className="w-full text-gray-600 md:w-2/3">
            Thank you for choosing Trendify Hair Care! We're committed to
            delivering the best hair oils made from the finest ingredients to
            help you achieve healthier, shinier hair. Follow us on social media
            for tips, product updates, and exclusive offers. If you have any
            questions or need assistance, our friendly customer support team is
            always ready to help. Subscribe to our newsletter for special
            discounts and be the first to know about new arrivals and
            promotions. Your hair care journey starts here—let’s make it radiant
            together!
          </p>
        </div>

        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <li>About Us</li>
            </Link>
            <Link to="/about">
              <li>Privacy & Policy</li>
            </Link>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-558-669-447</li>
            <li>contact.trendify@info.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 Trendify. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
