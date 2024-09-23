import React from "react";
import Image from "next/image";
import Logo from "/public/logo.png";


export default function Footer() {
  return (
    <div className="w-full my-5">
      {/* Footer */}
      <footer className="bg-black text-white">
        {/* Section: Social media */}
        <section className="flex justify-between p-4 bg-red-700">
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex space-x-4">
            
          </div>
        </section>

        {/* Section: Links */}
        <section className="mt-5">
          <div className="container mx-auto px-6 py-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column for Logo */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src={Logo}
                  className="w-36 h-auto"
                  alt="Company logo"
                  loading="lazy"
                />
              </div>

              {/* Empty space */}
              <div className="hidden md:block"></div>

              {/* Column for Useful links */}
              <div>
                <h6 className="text-uppercase font-bold">Useful links</h6>
                <hr className="mb-4 border-t-2 border-indigo-400" />
                <p>
                  <a href="#!" className="text-white hover:text-indigo-300">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white hover:text-indigo-300">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white hover:text-indigo-300">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white hover:text-indigo-300">
                    Help
                  </a>
                </p>
              </div>

              {/* Column for Contact */}
              <div>
                <h6 className="text-uppercase font-bold">Contact</h6>
                <hr className="mb-4 border-t-2 border-indigo-400" />
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@example.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="text-center p-3 bg-black border-t border-white mx-4">
          © 2020 Copyright:
          <a
            className="text-white hover:text-indigo-300"
            href="https://mdbootstrap.com/"
          >
            {" "}
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
