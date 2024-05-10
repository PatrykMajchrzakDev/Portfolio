import React from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import useLanguageStore from "@/store/LanguageStore";
import styles from "./LanguageToggler.module.scss";

interface OptionType {
  value: string;
  label: string;
  icon: string;
}

const LanguageToggler: React.FC = () => {
  // Zustand language store
  const { lang, setLanguage } = useLanguageStore();

  // react-select language options
  const languageOptions: OptionType[] = [
    { value: "en", label: "EN", icon: "assets/icons/en-flag.png" },
    { value: "pl", label: "PL", icon: "assets/icons/pl-flag.png" },
  ];

  // Change lang store value
  const handleChange = (option: SingleValue<OptionType>) => {
    if (option) {
      setLanguage(option.value);
    }
  };

  // Define custom styles for the select component
  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      border: "none",
      backgroundColor: "var(--background-color)",
    }),

    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      backgroundColor: state.isFocused ? "gray" : "var(--background-color)",
      color: "var(--default-text-color)",
      padding: "0px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "5px 10px 5px 5px", // Adjust padding around the dropdown arrow here
    }),
    singleValue: (provided) => ({
      ...provided,
      width: "50px",
      color: "var(--default-text-color)",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0px",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--menu-background-color)", // Set the background color for the menu
    }),
  };

  // Custom format option label function
  const formatOptionLabel = (option: OptionType) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={option.icon}
        alt={`${option.value} flag`}
        style={{ marginRight: 10, width: 20 }}
      />
      {option.label}
    </div>
  );
  return (
    <div className={styles.languageContainer}>
      <Select<OptionType, false>
        value={languageOptions.find((option) => option.value === lang)}
        onChange={handleChange}
        options={languageOptions}
        formatOptionLabel={formatOptionLabel}
        styles={customStyles}
        // menuIsOpen={true}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default LanguageToggler;
