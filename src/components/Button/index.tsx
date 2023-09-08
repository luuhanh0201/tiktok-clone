import { ReactNode } from "react";

type ClassName = string;

type ButtonProps = {
    className: ClassName;
    children: ReactNode;
};

function Button({ className, children }: ButtonProps) {
    return (
        <button className={`rounded-md border ${className}`}>
            {children}
        </button>
    );
}

export default Button;
