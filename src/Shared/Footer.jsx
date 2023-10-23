import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* Top Footer section Start */}
      <div className="top-footer-main-section my-20 px-5">
        <div className="text-section md:w-[920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="item-section">
            <h4 className="font-sans font-medium text-xl text-gray-700 mb-5">
              Featured
            </h4>
            <span className="footer-menu-text">
              <p>Air Force 1</p>
              <p>Jordan 1</p>
              <p>Metcon</p>
              <p>Air Max 270</p>
              <p>Air Max 97</p>
              <p>Air Max 90</p>
              <p>Pegasus</p>
              <p>Blazer</p>
            </span>
          </div>
          <div className="item-section">
            <div className="item-section">
              <h4 className="font-sans font-medium text-xl text-gray-700 mb-5">
                Shoes
              </h4>
              <span className="footer-menu-text">
                <p>All Shoes</p>
                <p>Jordan Shoes</p>
                <p>Running Shoes</p>
                <p>Basketball Shoes</p>
                <p>Tennis Shoes</p>
                <p>Training Shoes</p>
                <p>Custom Shoes</p>
                <p>Sale Shoes</p>
                <p>Soccer Cleats</p>
              </span>
            </div>
          </div>
          <div className="item-section">
            <div className="item-section">
              <h4 className="font-sans font-medium text-xl text-gray-700 mb-5">
                Clothing
              </h4>
              <span className="footer-menu-text">
                <p>All Clothing</p>
                <p>Shorts</p>
                <p>Hoodies & Pullovers</p>
                <p>Joggers & Sweatpants</p>
                <p>Sports Bras</p>
                <p>Pants & Tights</p>
                <p>Socks</p>
                <p>Yoga</p>
                <p>NikeLab</p>
                <p>Plus Size</p>
                <p>Big & Tall</p>
                <p>Sale Clothing</p>
              </span>
            </div>
          </div>
          <div className="item-section">
            <div className="item-section">
              <h4 className="font-sans font-medium text-xl text-gray-700 mb-5">
                Kids
              </h4>
              <span className="footer-menu-text">
                <p>Infant & Toddler Shoes</p>
                <p>Kids Shoes</p>
                <p>Kids Basketball Shoes</p>
                <p>Kids Running Shoes</p>
                <p>Kids Jordan Shoes</p>
                <p>Kids Clothing</p>
                <p>Kids Backpacks</p>
                <p>Kids Socks</p>
                <p>Kids Sale</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Top Footer section End */}

      {/* Bottom Footer section Start */}
      <div className="main-footer-section bg-[#111111] text-white">
        <div className="footer-body max-w-[1440px] mx-auto p-[40px]">
          <div className="footer-top-body grid grid-cols-1 md:grid-cols-2">
            <div className="footer-left-item grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <p className="font-sans font-extrabold text-xs text-gray-50 mb-5">
                  GIFT CARDS
                </p>
                <span className=" text-green-50">
                  <p className="font-sans font-extrabold text-xs text-gray-50 cursor-pointer mb-5">
                    PROMOTIONS
                  </p>
                  <p className="font-sans font-extrabold text-xs text-gray-50 cursor-pointer mb-5">
                    FIND A STORE
                  </p>
                  <p className="font-sans font-extrabold text-xs text-gray-50 cursor-pointer mb-5">
                    BECOME A MEMBER
                  </p>
                  <p className="font-sans font-extrabold text-xs text-gray-50 cursor-pointer mb-5">
                    NIKE JOURNAL
                  </p>
                  <p className="font-sans font-extrabold text-xs text-gray-50 cursor-pointer mb-5">
                    SEND US FEEDBACK
                  </p>
                </span>
              </div>
              <div>
                <p className="font-sans font-extrabold text-xs text-gray-50 mb-5">
                  GET HELP
                </p>
                <span className=" text-green-50">
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Order Status
                  </p>
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Shipping and Delivery
                  </p>
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Returns
                  </p>
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Order Cancellation
                  </p>
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Payment Options
                  </p>
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Contact Us
                  </p>
                </span>
              </div>
              <div>
                <p className="font-sans font-extrabold text-xs text-gray-50 mb-5">
                  ABOUT NIKE
                </p>
                <span className=" text-green-50">
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    News
                  </p>
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Careers
                  </p>
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Investors
                  </p>
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Purpose
                  </p>
                  <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mb-5">
                    Sustainability
                  </p>
                </span>
              </div>
            </div>

            {/* Footer link section */}
            <div className="footer-right-item flex justify-start md:justify-end gap-5 ">
              <div className="w-10 h-10 flex items-center justify-center text-xl bg-gray-500 rounded-full hover:bg-white duration-300 cursor-pointer text-black">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 flex items-center justify-center text-xl bg-gray-500 rounded-full hover:bg-white duration-300 cursor-pointer text-black">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 flex items-center justify-center text-xl bg-gray-500 rounded-full hover:bg-white duration-300 cursor-pointer text-black">
                <FaYoutube />
              </div>
              <div className="w-10 h-10 flex items-center justify-center text-xl bg-gray-500 rounded-full hover:bg-white duration-300 cursor-pointer text-black">
                <FaInstagram />
              </div>
            </div>
          </div>

          {/* CopyRight Section */}
          <div className="footer-bottom-body mt-10 grid grid-cols-1 md:grid-cols-2 justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center pb-4 md:pb-0">
              <span className="mr-5 font-sans font-medium text-sm cursor-pointer text-white flex gap-3 items-center">
                <FaLocationDot /> United States
              </span>
              <span className="font-sans font-medium text-xs text-gray-400">
                © 2023 Nike, Inc. All Rights Reserved
              </span>
            </div>
            <div className=" text-start md:text-end">
              <div className="flex flex-col md:flex-row justify-end gap-5">
                <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer">
                  Guides
                </p>
                <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer">
                  Terms of Sale
                </p>
                <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer">
                  Terms of Use
                </p>
                <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer">
                  Nike Privacy Policy
                </p>
                <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer flex items-center gap-1 text">
                  <img
                    src="https://static.nike.com/a/images/w_960,c_limit/81a78fa9-0756-42ac-adb0-33c0245bf27a/image.png"
                    alt=""
                  />
                  Your Privacy Choices
                </p>
              </div>
              <div>
                <p className="font-sans font-medium text-xs text-gray-400 hover:text-gray-50 cursor-pointer mt-5">
                  CA Supply Chains Act
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer section End */}
    </>
  );
};

export default Footer;
