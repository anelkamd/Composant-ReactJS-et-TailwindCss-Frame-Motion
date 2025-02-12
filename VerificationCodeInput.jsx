import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { BiUser } from "react-icons/bi";

const VerificationCodeInput = () => {
    const [code, setCode] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);

    const isCorrectCode = code.join("") === "0001";
    const isComplete = code.every((digit) => digit !== "");

    const handleChange = (index, value) => {
        if (isNaN(value)) return;
        let newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 3) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen justify-center p-4">
            <motion.div
                className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-12 h-12 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                    <BiUser className="text-gray-500 text-2xl" />
                </div>
                <h2 className="text-lg font-semibold">Enter Verification Code</h2>
                <p className="text-gray-500 text-sm">We’ve sent a code to <span className="font-medium">anelkamd@isig.ac.cd</span></p>
                <div className="flex justify-center gap-2 mt-4">
                    {code.map((digit, index) => (
                        <motion.input
                            key={index}
                            ref={(el) => (inputsRef.current[index] = el)}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className={`w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none transition-colors duration-300 ${isComplete ? (isCorrectCode ? "bg-green-200 border-green-500" : "bg-red-200 border-red-500") : "focus:border-gray-500"}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                        />
                    ))}
                </div>
                <button className="mt-6 w-full bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-800 transition">Submit</button>
                <p className="mt-4 text-sm text-gray-500">Experiencing issues receiving the code?</p>
                <button className="text-gray-900 font-semibold text-sm mt-1">Resend code</button>
            </motion.div>
        </div>
    );
};

export default VerificationCodeInput;
