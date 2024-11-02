"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="w-full overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <h1 className="heading">
          Kind words from
          <span className="text-purple"> satisfied clients</span>
        </h1>

        <div className="flex flex-col items-center mt-10">
          {/* Testimonials Section */}
          <div className="relative w-full h-[50vh] md:h-[30rem] rounded-md">
            <div className="absolute inset-0">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </div>

          {/* Companies Section */}
          <div className="w-full mt-10">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16">
              {companies.map((company) => (
                <div 
                  key={company.id} 
                  className="flex items-center flex-shrink-0 md:max-w-60 max-w-32 gap-2"
                >
                  <img
                    src={company.img}
                    alt={company.name}
                    className="w-5 md:w-10 object-contain"
                  />
                  <img
                    src={company.nameImg}
                    alt={company.name}
                    className="w-20 md:w-24 object-contain"
                    style={{
                      maxWidth: company.id === 4 || company.id === 5 ? '100px' : '150px'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;