import React from "react";

type ButtonProps = {
  variant?: "default" | "secondary";
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  onClick,
  className,
  type,
  ...props
}) => {
  const buttonClassNames = `
           h-[51px] transition duration-500 cursor-pointer rounded-full px-6 text-[15px] font-bold
           ${variant === "default" && "bg-white text-primary hover:text-white hover:bg-secondary"}
            ${variant === "secondary" && "bg-secondary text-white hover:bg-primary px-[38px]"}
           ${className && className}
       `;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${buttonClassNames} roboto`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
