// Reclaim.jsx

import React, { useState } from "react";

const ReclaimForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
                w-full max-w-[900px] mx-auto border border-white/30
                rounded-[24px] sm:rounded-full
                p-2 sm:p-2.5
                flex flex-col sm:flex-row
                items-stretch sm:items-center
                gap-3 sm:gap-2
                bg-white
            "
        >
            {/* Input */}
            <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                    flex-1 bg-white
                    rounded-[18px] sm:rounded-full
                    px-4 sm:px-5 md:px-6
                    py-3 sm:py-3 md:py-3
                    text-[#212529]
                    placeholder-[#7A7A7A]
                    outline-none
                    font-['Plus_Jakarta_Sans']
                    text-[14px] sm:text-[16px] md:text-[18px]
                "
            />

            {/* Button */}
            <button
                type="submit"
                className="
                    w-full sm:w-auto
                    rounded-[18px] sm:rounded-full
                    px-5 sm:px-7 md:px-10
                    py-3
                    text-white
                    font-['Plus_Jakarta_Sans']
                    text-[14px] sm:text-[16px] md:text-[18px]
                    font-medium
                    whitespace-nowrap
                    transition-all duration-300
                    hover:scale-[1.02]
                "
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, #EA3C26 0%, #842215 100%)"
                }}
            >
                Get Started Now
            </button>
        </form>
    );
};

export default ReclaimForm;