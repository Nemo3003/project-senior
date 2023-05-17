import React from "react";

// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const testimonies = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam.",
    name: "Ricky Aprilia",
    title: "Founder of Varibo",
    image: "https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg",
  },
  {
    text: "Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John Doe",
    title: "CEO of Acme Corp",
    image: "https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    name: "Jane Smith",
    title: "CTO of XYZ Inc",
    image: "https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Let’s hear What they say
      </h1>
      {testimonies.map((testimony, index) => (
        <div key={index} className="flex justify-center gap-4">
          <span className="text-5xl text-primary">
            <RiDoubleQuotesL />
          </span>
          <p className="max-w-2xl text-center text-gray-500">
            {testimony.text}
          </p>
          <span className="text-5xl text-primary">
            <RiDoubleQuotesR />
          </span>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center justify-center gap-8 md:gap-12">
              <img
                src={testimony.image}
                className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-center text-[24px] font-bold">{testimony.name}</h3>
              <h5 className="text-center text-[20px] text-gray-500">
                {testimony.title}
              </h5>
              
            </div>
          </div>
          
        </div>
      ))}
      
    </div>
  );
};

export default Reviews;