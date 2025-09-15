import React, { useState, useEffect } from 'react';
import useAuth from '../utils/useAuth';

function CheckOut() {

  const { user } = useAuth();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Bangladesh',
    phone: '',
  });

  const [regionData, setRegionData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bkash');
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 1200, quantity: 2, image: 'https://via.placeholder.com/80' },
  
  ]);


  const sampleRegionData = [
    { region: 'Dhaka', district: 'Dhaka' },
    { region: 'Dhaka', district: 'Gazipur' },
    { region: 'Dhaka', district: 'Narayanganj' },
    { region: 'Chittagong', district: 'Chittagong' },
    { region: 'Chittagong', district: 'Cox\'s Bazar' },
    { region: 'Chittagong', district: 'Rangamati' },
    { region: 'Sylhet', district: 'Sylhet' },
    { region: 'Sylhet', district: 'Habiganj' },
    { region: 'Sylhet', district: 'Moulvibazar' },
    { region: 'Khulna', district: 'Khulna' },
    { region: 'Khulna', district: 'Bagerhat' },
    { region: 'Khulna', district: 'Satkhira' },
  ];

  useEffect(() => {
    // Try to fetch data, fallback to sample data if fails
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setRegionData(data))
      .catch(err => {
        console.error("Failed to load region data, using sample data", err);
        setRegionData(sampleRegionData);
      });
  }, []);

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed!\n
    Name: ${shippingInfo.name}
    Address: ${shippingInfo.address}, ${shippingInfo.city}
    Region: ${selectedRegion}
    District: ${selectedDistrict}
    Phone: ${shippingInfo.phone}
    Payment: ${paymentMethod}`);
  };

  const uniqueRegions = [...new Set(regionData.map(item => item.region))];
  const getDistrictsByRegion = (region) => {
    return [...new Set(regionData
      .filter(item => item.region === region)
      .map(item => item.district))];
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = 100;
  const total = subtotal + shippingCost;

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 md:p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Checkout</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Shipping Form */}
        <div className="lg:w-2/3 bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={shippingInfo.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Address*</label>
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="House #123, Road #456"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="text"
                name="address"
                readOnly
                defaultValue={user?.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="House #123, Road #456"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">City*</label>
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Dhaka"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Postal Code*</label>
                <input
                  type="text"
                  name="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="1200"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Country*</label>
                <input
                  type="text"
                  name="country"
                  value={shippingInfo.country}
                  readOnly
                  className="w-full border border-gray-300 bg-gray-100 px-3 py-2 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Region*</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => {
                    setSelectedRegion(e.target.value);
                    setSelectedDistrict('');
                  }}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Region</option>
                  {uniqueRegions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">District*</label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  required
                  disabled={!selectedRegion}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
                >
                  <option value="">Select District</option>
                  {selectedRegion && getDistrictsByRegion(selectedRegion).map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-400 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bkash"
                    checked={paymentMethod === 'bkash'}
                    onChange={() => setPaymentMethod('bkash')}
                    className="h-5 w-5 text-blue-600"
                  />
                  <div>
                    <span className="block font-medium">bKash</span>
                    <span className="block text-sm text-gray-500">Pay via bKash mobile wallet</span>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-400 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="rocket"
                    checked={paymentMethod === 'rocket'}
                    onChange={() => setPaymentMethod('rocket')}
                    className="h-5 w-5 text-blue-600"
                  />
                  <div>
                    <span className="block font-medium">Rocket</span>
                    <span className="block text-sm text-gray-500">Pay via Rocket mobile wallet</span>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-400 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="h-5 w-5 text-blue-600"
                  />
                  <div>
                    <span className="block font-medium">Credit/Debit Card</span>
                    <span className="block text-sm text-gray-500">Pay with Visa/Mastercard</span>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-400 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="h-5 w-5 text-blue-600"
                  />
                  <div>
                    <span className="block font-medium">Cash on Delivery</span>
                    <span className="block text-sm text-gray-500">Pay when you receive the product</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition mt-6"
            >
              Confirm Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 bg-white p-6 shadow-md rounded-lg h-fit sticky top-4">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-4 mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <div className="font-medium">৳{item.price * item.quantity}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>৳{shippingCost}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2">
              <span>Total</span>
              <span>৳{total}</span>
            </div>
          </div>

          {paymentMethod === 'bkash' || paymentMethod === 'rocket' ? (
            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <h4 className="font-medium mb-2">Payment Instructions</h4>
              <p className="text-sm text-gray-600">
                Please send ৳{total} to {paymentMethod === 'bkash' ? '017XXXXXXXX' : '018XXXXXXXX'} and include your order ID in the reference.
              </p>
            </div>
          ) : paymentMethod === 'cod' ? (
            <div className="mt-6 p-4 bg-yellow-50 rounded-md">
              <h4 className="font-medium mb-2">Cash on Delivery</h4>
              <p className="text-sm text-gray-600">
                You'll pay ৳{total} when you receive your order.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CheckOut;