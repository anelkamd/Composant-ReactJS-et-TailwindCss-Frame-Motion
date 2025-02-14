import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Calendar, ArrowRight, ArrowLeft, Bold, Italic, Link, Strikethrough, List, ListOrdered, X, ClipboardList } from "lucide-react";

export default function TaskForm() {
    const [taskTitle, setTaskTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [assignedPerson, setAssignedPerson] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [dueDate, setDueDate] = useState(null);
    const people = ["Anelka MD", "Djo Dev", "Greg Malos"];

    return (
        <div className="flex justify-center items-center h-screen relative">
            {!isOpen ? (
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-3 bg-gray-400 text-white rounded-full hover:bg-gray-500 relative"
                    >
                        <ClipboardList size={24} />
                    </button>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-200 hover:opacity-100">
            New Task
          </span>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full relative"
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <X size={20} />
                    </button>
                    <input
                        type="text"
                        placeholder="Task title..."
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className="w-full text-gray-500 text-lg font-semibold border-none outline-none mb-4"
                    />

                    <div className="flex gap-3 mb-4 relative">
                        {assignedPerson ? (
                            <div className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-gray-200 text-gray-600">
                                {assignedPerson}
                                <button onClick={() => setAssignedPerson(null)} className="text-gray-500 hover:text-gray-700">
                                    <X size={16} />
                                </button>
                            </div>
                        ) : (
                            <button
                                className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                <UserPlus size={16} /> Assign
                            </button>
                        )}
                        {showDropdown && !assignedPerson && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute top-12 left-0 bg-white border rounded-lg shadow-lg w-40"
                            >
                                {people.map((person) => (
                                    <div
                                        key={person}
                                        onClick={() => { setAssignedPerson(person); setShowDropdown(false); }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {person}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                        {dueDate ? (
                            <div className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-gray-200 text-gray-600">
                                {dueDate}
                                <button onClick={() => setDueDate(null)} className="text-gray-500 hover:text-gray-700">
                                    <X size={16} />
                                </button>
                            </div>
                        ) : (
                            <button
                                className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                                onClick={() => setShowCalendar(!showCalendar)}
                            >
                                <Calendar size={16} /> Due Date
                            </button>
                        )}
                        {showCalendar && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute top-12 left-32 bg-white border rounded-lg shadow-lg p-4"
                            >
                                <input
                                    type="date"
                                    className="p-2 border rounded-lg w-full"
                                    onChange={(e) => { setDueDate(e.target.value); setShowCalendar(false); }}
                                />
                            </motion.div>
                        )}
                    </div>

                    <label className="text-gray-700 font-medium">Description</label>
                    <div className="border rounded-lg p-3 mt-1 bg-gray-50">
                        <div className="flex gap-2 mb-2">
                            <button className="text-gray-600 hover:text-black"><Bold size={16} /></button>
                            <button className="text-gray-600 hover:text-black"><Italic size={16} /></button>
                            <button className="text-gray-600 hover:text-black"><Strikethrough size={16} /></button>
                            <button className="text-gray-600 hover:text-black"><Link size={16} /></button>
                            <button className="text-gray-600 hover:text-black"><List size={16} /></button>
                            <button className="text-gray-600 hover:text-black"><ListOrdered size={16} /></button>
                        </div>
                        <textarea
                            className="w-full bg-transparent outline-none resize-none text-gray-600"
                            rows="4"
                            placeholder="Your description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            <ArrowLeft size={16} /> Back
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                            Next Step <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
