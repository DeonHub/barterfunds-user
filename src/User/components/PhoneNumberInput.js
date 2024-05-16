import React, { useState, useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const PhoneNumberInput = ({
  handleChange,
  setSelectedCountryCode
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const inputElement = inputRef.current;

    const iti = intlTelInput(inputElement, {
      initialCountry: "auto",
      separateDialCode: true,
      initialCountry: "us",
    });

    const initialCountryData = iti.getSelectedCountryData();
    setSelectedCountryCode(initialCountryData.dialCode);

    const handleCountryChange = () => {
      const countryData = iti.getSelectedCountryData();
      setSelectedCountryCode(countryData.dialCode);
      // console.log(countryData.dialCode);
    };

    inputElement.addEventListener("countrychange", handleCountryChange);

    // Clean up function
    return () => {
      inputElement.removeEventListener("countrychange", handleCountryChange);
      iti.destroy();
    };
  }, [setSelectedCountryCode]);

  return (
    
    <>
        <input
            ref={inputRef}
            type="tel"
            id="contact"
            name="contact"
            className="form-control form-control-lg"
            placeholder="Enter phone number"
            onChange={handleChange}
            />
</>

  );
};

export default PhoneNumberInput;
