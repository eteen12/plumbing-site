"use client";
import { React, useState } from "react";

export default function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What do you charge for services?",
      answer:
        "We charge a cost-efficient fee for coming out and quote each job in writing before the work begins. Our work is backed by a 100% satisfaction guarantee.",
    },
    {
      id: 2,
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free quotes for all of our services.",
    },
    {
      id: 3,
      question: "What areas do you serve?",
      answer:
        "We proudly serve Kelowna, West Kelowna, Vernon, Pentiction, and Peachland!",
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };
  return (
    <div className="p-10 py-20 grid grid-cols-1 sm:grid-cols-2 lg:px-20 gap-10">
      <div>
        <div className="flex">
          <div className="w-5 h-px bg-red-700 mr-2 mt-3" />
          <p className="text-lg montserrat600 text-red-700">About Us</p>
        </div>
        <h2 className="montserrat700 text-2xl lg:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-5 lg:text-lg">
          Plumbing problems can be extremely frustrating, let alone trying to
          find a trustworthy, reliable plumbing service, with no hidden fees, no
          strings attached.
        </p>
        <div className=" flex mt-10">
          <a
            href="#"
            className="bg-red-700 text-white px-6 py-2 border border-red-700 text-lg text-nowrap w-auto self-start"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-7 ">
        {faqs.map((faq) => (
          <div key={faq.id} className="">
            <div
              className="flex px-5 py-5 cursor-pointer justify-between font-semibold bg-gray-100"
              onClick={() => toggleQuestion(faq.id)}
            >
              <h3>{faq.question}</h3>
              <span>{openQuestion === faq.id ? "-" : "+"}</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openQuestion === faq.id ? "max-h-screen" : "max-h-0"
              }`}
            >
              {openQuestion === faq.id && (
                <div className="mt-3 px-5 py-5">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
