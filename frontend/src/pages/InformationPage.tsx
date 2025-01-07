import React, { useState } from "react";

const InformationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const openUpdateModal = (data: any) => {
    setFormData(data); // Pre-fill form with existing data
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    try {
      // Call your update API here
      console.log("Updated Data:", formData);
      alert("Information updated successfully!");
      setIsModalOpen(false); // Close modal after updating
    } catch (error) {
      console.log(error);
      alert("Something went wrong while updating");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const deleteData = async (id: number) => {
    try {
      alert(`Delete ID: ${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const Information = [
    { name: "Varun", email: "v@gmail.com", phone: "86016869", address: "SPN" },
    { name: "Aman", email: "a@gmail.com", phone: "86016870", address: "Lucknow" },
    { name: "Rohan", email: "r@gmail.com", phone: "86016871", address: "Delhi" },
    { name: "Sohan", email: "s@gmail.com", phone: "86016872", address: "Noida" },
    { name: "Mohan", email: "m@gmail.com", phone: "86016873", address: "Kanpur" },
  ];

  return (
    <div className="flex justify-center pt-10 flex-col gap-9 items-center">
      {/* Data List */}
      {Information.map((info, i) => {
        return (
          <div
            key={i}
            className="border w-[90%] md:w-[60%] py-4 px-4 rounded-md shadow-md shadow-slate-500 flex justify-between"
          >
            <div>
              <div className="flex gap-2">
                <label className="font-semibold">Name:</label>
                <span className="font-semibold text-purple-800">{info.name}</span>
              </div>
              <div className="flex gap-2">
                <label className="font-semibold">Email:</label>
                <span className="font-semibold text-purple-800">{info.email}</span>
              </div>
              <div className="flex gap-2">
                <label className="font-semibold">Phone:</label>
                <span className="font-semibold text-purple-800">{info.phone}</span>
              </div>
              <div className="flex gap-2">
                <label className="font-semibold">Address:</label>
                <span className="font-semibold text-purple-800">{info.address}</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button
                onClick={() => deleteData(i)}
                className="border py-1 px-4 w-[200px] hover:bg-red-600 rounded transition-all duration-200"
              >
                DELETE
              </button>
              <button
                onClick={() => openUpdateModal(info)}
                className="border py-1 px-4 w-[200px] hover:bg-yellow-600 rounded transition-all duration-200"
              >
                UPDATE
              </button>
            </div>
          </div>
        );
      })}

      {/* Update Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[40%]">
            <h2 className="text-2xl font-bold mb-4 text-center">Update Information</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border text-gray-800 border-gray-800 rounded p-2 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border text-gray-800 border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border text-gray-800 border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border text-gray-800 border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500  text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformationPage;
