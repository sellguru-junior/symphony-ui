import React, { TextareaHTMLAttributes } from "react";

// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: string;
  label?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  //   type: "text" | "password" | "email";
  inValid: boolean | string;
  errorMessage?: string;
}

function inputId(): string {
  return "TextArea" + Math.floor(Math.random() * 100000).toString();
}

const TextArea: React.FC<InputProps> = ({
  theme,
  label,
  name,
  //   type,
  placeholder,
  onChange,
  onBlur,
  value,
  inValid,
  errorMessage,
  ...props
}) => {
  return (
    <div className={`${theme}-TextArea-container w-[100%]`}>
      <label className={`${theme}-TextArea-label`} htmlFor={inputId()}>
        {label}
      </label>
      <div
        data-testid="input-container"
        className={` w-[100%]  ${
          inValid && `${theme}-TextArea-inValid`
        } ${theme}-TextArea-box `}
      >
        <textarea
          data-testid="input-id"
          {...props}
          className={`${theme}-TextArea-input w-[100%] `}
          //   type={getInputType()}
          id={inputId()}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
      {inValid && (
        <div className={`${theme}-TextArea-error`}>{errorMessage}</div>
      )}
    </div>
  );
};

TextArea.defaultProps = {
  theme: "Acord",
};

export default TextArea;
