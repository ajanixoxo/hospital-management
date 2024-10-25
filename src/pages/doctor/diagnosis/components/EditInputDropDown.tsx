import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
interface DropdownProp {
  label: string;
  options: string[];
  selectedOption: string;
  onSelect:   (option: string) => void 
}
const EditInputDropDown:React.FC<DropdownProp > = ({label, options, selectedOption, onSelect}) => {
  // STATES 
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

 

  const toggleDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };
  // searchNames

  const handleSearchNames = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div
        className={`"dropdown border boder-input w-56 rounded-lg px-3 relative w-64"  ${
          isDropdownOpen
            ? "dropdown border boder-input w-60 absolute z-10"
            : "dropdown border boder-input w-60"
        }`}
      >
        <button
          className="p-3 flex items-center  w-full justify-between"
          onClick={toggleDropdown}
        >
    {selectedOption || label}
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
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option: string, index: number) => (
                  <div
                    key={index}
                    className="py-2 px-4 hover:bg-purple-300"
                    onClick={() => {
                      onSelect(option);
                      setisDropdownOpen(false);
                    }}
                  >
                {option}
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
  );
};

export default EditInputDropDown;
