import React from 'react'
import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
const EditInputDropDown = () => {
    const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const names: string[] = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
  ];
  const [selectedName, setSelectedName] = useState<string>(
    names[0] || "    Adalynne Adlynne"
  );

  const toggleDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };
  // searchNames
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchNames = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };
  const filteredNames = names.filter((name: string) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
           <div
          className={`"dropdown border boder-input w-56 rounded-lg px-3 relative w-64"  ${
            isDropdownOpen
              ? "dropdown border boder-input w-60  h-auto"
              : "dropdown border boder-input w-60"
          }`}
        >
          <button
            className="p-3 flex items-center  w-full justify-between"
            onClick={toggleDropdown}
          >
            {selectedName}
            <span>
              <FaChevronDown />
            </span>
          </button>

          <div className="hidden-drop">
            {isDropdownOpen && (
              <div>
                {/* Input Field */}
                <input
                  type="text"
                  className="px-3 py-2 border border-input w-full mb-2"
                  value={searchQuery}
                  onChange={handleSearchNames}
                />
                {filteredNames.length > 0 ? (
                  filteredNames.map((name: string, index: number) => (
                    <div
                      key={index}
                      className="py-2 px-4 hover:bg-purple-300"
                      onClick={() => {
                        setSelectedName(name);
                        setisDropdownOpen(false);
                      }}
                    >
                      {name}
                    </div>
                  ))
                ) : (
                  <div className="py-2 px-4">No names found</div>
                )}
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default EditInputDropDown