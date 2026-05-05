// SubscribeForm.jsx

import React, { useState } from "react";

const SubscribeForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribed Email:", email);
        setEmail("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-[720px] border border-white/30 rounded-full p-2 flex items-center gap-2 bg-transparent"
        >
            {/* Input */}
            <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-4 md:px-6 py-3 text-white placeholder-white/60 outline-none font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[16px] md:text-[18px]"
                required
            />

            {/* Button */}
            <button
                type="submit"
                className="bg-[#EA3C26] hover:bg-white hover:text-[#EA3C26] text-white rounded-full px-5 sm:px-6 md:px-8 py-3 font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[16px] md:text-[18px] font-medium transition-all duration-300 whitespace-nowrap"
            >
                Subscribe
            </button>
        </form>
    );
};

export default SubscribeForm;