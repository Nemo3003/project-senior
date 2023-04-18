import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">
            About Us
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            We're Passionate About Preparing you for the future!
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Our team is made up of highly skilled professionals who are
            passionate about helping our students achieve their goals.
          </p>
        </div>
        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="mt-4 text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis tortor sed dolor lacinia interdum. Duis luctus, eros in
                aliquam convallis, nibh quam suscipit elit, ut suscipit nisi
                massa nec est. Suspendisse potenti. Vivamus pharetra risus vel
                urna sodales, ac porttitor magna suscipit. Nullam eget elit a
                nisi interdum rutrum.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <h3 className="text-2xl font-bold text-gray-900">
                Our Values
              </h3>
              <p className="mt-4 text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis tortor sed dolor lacinia interdum. Duis luctus, eros in
                aliquam convallis, nibh quam suscipit elit, ut suscipit nisi
                massa nec est. Suspendisse potenti. Vivamus pharetra risus vel
                urna sodales, ac porttitor magna suscipit. Nullam eget elit a
                nisi interdum rutrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
