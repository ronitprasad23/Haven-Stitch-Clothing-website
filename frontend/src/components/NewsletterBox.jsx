import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="py-16 px-4 sm:px-6 bg-gray-50 rounded-xl shadow-lg">
      <div className="text-center">
        {/* Title - Increased size and improved offer text */}
        <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Unlock 20% Off Your First Order
        </p>

        {/* Description - Engaging text with good readability */}
        <p className="text-lg text-gray-600 mt-3 max-w-xl mx-auto">
          Join our community for exclusive style insights, early access to sales, and instant access to your discount code.
        </p>

        {/* Form - Cleaned up to remove the distracting border/gap and add shadow */}
        <form onSubmit={onSubmitHandler} className="w-full sm:w-3/4 lg:w-1/3    flex items-stretch mx-auto my-8 shadow-xl rounded-lg overflow-hidden">
            {/* Input field */}
            <input
              type="email"
              className="flex-1 px-5 py-4 text-gray-800 border-none outline-none focus:ring-2 focus:ring-black transition duration-150"
              placeholder="Enter your email address"
              required
            />
            {/* Button - The fix for visibility is here */}
            <button
              type="submit"
              className="w-1/2 bg-black text-white font-semibold text-sm px-1 uppercase hover:bg-gray-800 transition duration-150 shadow-md hover:shadow-lg"
            >
              Subscribe
            </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterBox;
