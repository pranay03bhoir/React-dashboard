import React, { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Settings updated successfully!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl text-center font-bold mb-6">Settings</h1>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
            placeholder="Enter your username"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
            className="h-5 w-5 text-blue-500"
          />
          <label htmlFor="notifications" className="font-semibold">
            Receive email notifications
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
