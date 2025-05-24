import React from 'react';
import { ChevronLeft } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      {/* Back arrow and heading */}
      <div className="flex items-center mb-6">
        <ChevronLeft className="w-6 h-6 text-gray-800 cursor-pointer mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Shipping Address</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          {/* Address Form Section */}
          <div className="border p-4 rounded-md bg-white text-gray-800">
            {/* Radio Button */}
            <div className="flex items-center mb-4">
              <input
                type="radio"
                className="accent-red-500 mr-2"
                name="addressOption"
                id="newAddress"
              />
              <label htmlFor="newAddress" className="font-medium text-gray-800">
                Add new address
              </label>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1 text-gray-800">First Name</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1 text-gray-800">Last Name</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <label className="text-sm font-medium mb-1 text-gray-800">Street Address</label>
              <input
                type="text"
                className="border rounded-md px-3 py-2"
                placeholder="Street Address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1 text-gray-800">Apt Number</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2"
                  placeholder="Apt Number"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1 text-gray-800">State</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2"
                  placeholder="State"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1 text-gray-800">ZIP</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2"
                  placeholder="ZIP"
                />
              </div>
            </div>

            {/* Updated Button Section */}
           <div className="flex mt-10 mb-14 space-x-4">
  <button className="w-1/2 border border-gray-400 text-black px-4 py-2 rounded-md">
    Cancel
  </button>
  <button className="w-1/2 bg-black text-white px-4 py-2 rounded-md">
    Save this address
  </button>
</div>

          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-md p-6 shadow-sm text-gray-800">
          <p className="mb-4">
            By placing your order, you agree to our company Privacy Policy and Conditions of Use.
          </p>

          <hr className="my-4" />

          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Items - Silhouette No. 1 – Vermilion</span>
              <span>₹7,999</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping and handling</span>
              <span>₹200</span>
            </div>
            <div className="flex justify-between">
              <span>Before tax</span>
              <span>₹6,599</span>
            </div>
            <div className="flex justify-between">
              <span>Tax Collected</span>
              <span>₹1,400</span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Order Total</span>
            <span>₹8,199</span>
          </div>

          <button className="w-full mt-6 bg-black text-white py-3 rounded-md text-center">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
