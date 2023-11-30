"use client";
import React, { useState } from "react";
import InputWithButton from "../components/InputWithBtn";

function Account() {
  const [editingName, setEditingName] = useState(false);
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [isEditingCountry, setIsEditingCountry] = useState(false);

  const [name, setName] = useState("Sanchez de Las Vegas");
  const [firstName, setFirstName] = useState("Pedros");
  const [country, setCountry] = useState("Belgium");

  const handleEditName = () => {
    setEditingName(true);
  };

  const handleEditFirstName = () => {
    setIsEditingFirstName(true);
  };

  const handleEditCountry = () => {
    setIsEditingCountry(true);
  };

  const handleSaveName = () => {
    // SAVE IN LOCAL STORAGE HERE //
    setEditingName(false);
    // API ACCOUNT CHANGE CALL //
  };

  const handleSaveFirstName = () => {
    setIsEditingFirstName(false);
  };

  const handleSaveCountry = () => {
    setIsEditingCountry(false);
  };

  return (
    <div className="w-full lg:h-[50vh] mt-12 flex flex-col justify-center items-center">
      <h1 className="text-4xl w-full text-center mt-12">Hello {firstName} !</h1>
      <div className="lg:flex items-center">
        <figure className="relative flex justify-center mt-12">
          <img
            src="/user_profile.png"
            alt="User Profile Picture"
            className="h-[180px] w-[180px] object-cover rounded-sm"
          />
        </figure>
        <div className="flex flex-col opacity-80 mt-12 gap-6 lg:w-1/2 lg:border-l lg:ml-12 lg:pl-12">
          <div>
            <span>Name :</span>
            <InputWithButton
              value={name}
              onChange={setName}
              onSave={handleSaveName}
              isEditing={editingName}
              handleEdit={handleEditName}
              placeholder="Enter name"
            />
          </div>

          <div>
            <span>FirstName :</span>
            <InputWithButton
              value={firstName}
              onChange={setFirstName}
              onSave={handleSaveFirstName}
              isEditing={isEditingFirstName}
              handleEdit={handleEditFirstName}
              placeholder="Enter first name"
            />
          </div>

          <div>
            <span>Country :</span>
            <InputWithButton
              value={country}
              onChange={setCountry}
              onSave={handleSaveCountry}
              isEditing={isEditingCountry}
              handleEdit={handleEditCountry}
              placeholder="Enter country"
            />
          </div>
          <p className="text-sm">
            Your subscribtion is active until{" "}
            <a href="/account" className="font-semibold text-green-400">
              23.09.2024
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Account;
