import React, { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const PhoneNumberInput = ({ handlePhoneNumberInput, setSelectedCountryCode }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const inputElement = inputRef.current;

    const iti = intlTelInput(inputElement, {
      initialCountry: "us",
      separateDialCode: true,
    });

    const initialCountryData = iti.getSelectedCountryData();
    setSelectedCountryCode(initialCountryData.dialCode);

    const handleCountryChange = () => {
      const countryData = iti.getSelectedCountryData();
      setSelectedCountryCode(countryData.dialCode);
    };

    inputElement.addEventListener("countrychange", handleCountryChange);

    // Clean up function
    return () => {
      inputElement.removeEventListener("countrychange", handleCountryChange);
      iti.destroy();
    };
  }, [setSelectedCountryCode]);

  const handleInput = (e) => {
    const rawValue = e.target.value;
    setInputValue(rawValue.replace(/x/g, ''));
    handlePhoneNumberInput(rawValue.replace(/x/g, ''));
    // console.log(rawValue.replace(/x/g, ''));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      
      setInputValue((prev) => prev.slice(0, -1));
    }
  };

  return (
    <input
      ref={inputRef}
      type="tel"
      id="contact"
      name="contact"
      className="form-control form-control-lg"
      value={inputValue}
      placeholder="Enter phone number"
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    />
  );
};

export default PhoneNumberInput;
