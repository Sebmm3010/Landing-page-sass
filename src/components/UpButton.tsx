import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const UpButton = () => {
    const [isActive, setIsActive] = useState(false);

    function ShowArrow() {
        if (window.scrollY >= 300) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    window.addEventListener("scroll", ShowArrow);
    return (
        <div className={isActive ? "up__button active" : "up__button"}>
            <a href="#home">
                <FaArrowUp />
            </a>
        </div>
    )
}
