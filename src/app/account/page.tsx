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
    <div className="w-full px-12">
      <h1 className="text-4xl mt-12">Account Page</h1>
      <div className="flex flex-col opacity-80 mt-12 gap-6">
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
      </div>
    </div>
  );
}

export default Account;
