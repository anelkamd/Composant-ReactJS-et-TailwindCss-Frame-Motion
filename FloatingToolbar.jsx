import { useState } from "react";
import { motion } from "framer-motion";
import { BiEdit, BiSave, BiGridAlt, BiLink, BiBrush, BiDotsHorizontalRounded } from "react-icons/bi";

const FloatingToolbar = () => {
    const [isWriting, setIsWriting] = useState(false);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center">
            {isWriting && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute w-64 p-3 shadow-lg rounded-lg border"
                >
                    <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Enter your credit score..."
                    />
                    <button className="mt-2 w-full bg-green-500 text-white p-2 rounded-lg">Calculate</button>
                </motion.div>
            )}

            <div className="flex items-center bg-white shadow-lg rounded-full p-2 space-x-3 border">
                <button
                    onClick={() => setIsWriting(!isWriting)}
                    className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
                >
                    <BiEdit className="text-gray-600 text-lg" />
                    <span className="text-gray-600">Write content</span>
                </button>

                {[BiGridAlt, BiLink, BiBrush, BiDotsHorizontalRounded].map((Icon, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.2, color: "#333" }}
                        className="text-gray-600 text-xl hover:text-gray-900 transition"
                    >
                        <Icon />
                    </motion.button>
                ))}

                <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <BiSave className="text-lg" />
                    <span>Save</span>
                </button>
            </div>
        </div>
    );
};

export default FloatingToolbar;
