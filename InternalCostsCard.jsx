import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedNumber = ({ value }) => {
    const props = useSpring({ number: value, from: 0, config: { duration: 1500 } });
    return <animated.span>{props.number.to((n) => n.toFixed(2))}</animated.span>;
};

export default function InternalCostsCard() {
    const [trigger, setTrigger] = useState(false);
    const internalCost = 611.37;
    const timeCost = 1190.0;
    const nonBillable = 32.75;

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-xl p-6 w-80 font-sans"
            >
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-lg">Internal Costs</span>
                    <div className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer">
                        <ArrowUp className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
                <div className="text-3xl font-bold mt-2 cursor-pointer" onClick={() => setTrigger(!trigger)}>
                    $
                    {trigger ? <AnimatedNumber value={internalCost} /> : internalCost.toFixed(2)}
                </div>
                <div className="mt-4 border-t pt-3 bg-gray-200 p-3 rounded-lg">
                    <div className="flex justify-between text-sm pb-2">
                        <span>Time</span>
                        <span className="font-semibold">$
                            {trigger ? <AnimatedNumber value={timeCost} /> : timeCost.toFixed(2)}
            </span>
                    </div>
                    <div className="border-t border-dashed border-gray-400 my-2"></div>
                    <div className="flex justify-between text-sm pt-2">
                        <span>Non-billable</span>
                        <span className="text-blue-500 font-semibold cursor-pointer">
              ${trigger ? <AnimatedNumber value={nonBillable} /> : nonBillable.toFixed(2)}
            </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}