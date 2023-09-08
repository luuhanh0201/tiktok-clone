/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

type ClassName = string;

type WrapperProps = {
    className: ClassName;
    children: ReactNode;
    style?: any
};
function Wrapper({ className, children }: WrapperProps) {
    return (
        <div style={{ maxHeight: "450px", minHeight: "100px" }} className={`w-full rounded-md shadow-lg border ${className}`}>
            {children}
        </div>
    );
}

export default Wrapper;