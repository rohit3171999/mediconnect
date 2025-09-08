import React, { useState } from "react";

export default function MediConnectApp() {
    const [section, setSection] = useState("home");
    const [form, setForm] = useState({
        name: "",
        age: "",
        symptoms: ""
    });

    const doctors = [
        { name: "Dr. A Sharma", specialization: "Cardiology" },
        { name: "Dr. B Kapoor", specialization: "General Physician" },
    ];
    const medicalHistory = [
        { date: "2025-08-10", diagnosis: "Migraine", doctor: "Dr. B Kapoor", prescription: "Pain Relief Tabs" },
        { date: "2025-06-20", diagnosis: "High BP", doctor: "Dr. A Sharma", prescription: "BP Tablets" },
    ];

    function handleFormChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Submitted! Doctor with expertise will be assigned.");
        setSection("dashboard");
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row font-[Inter] bg-gray-100">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-blue-700 text-white flex-shrink-0 shadow-lg">
                <div className="p-6 font-bold text-2xl border-b border-blue-600">MediConnect</div>
                <nav className="flex flex-col p-2">
                    {[
                        { key: "home", label: "Home" },
                        { key: "form", label: "Health Issue Form" },
                        { key: "dashboard", label: "Dashboard" },
                        { key: "collab", label: "Doctors" },
                    ].map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setSection(item.key)}
                            className={`my-1 py-2 px-4 text-left rounded-lg transition-colors ${
                                section === item.key
                                    ? "bg-blue-900"
                                    : "hover:bg-blue-600"
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-8 space-y-8">
                {/* Home Section */}
                {section === "home" && (
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome to MediConnect</h1>
                        <p className="mb-6 text-gray-700">
                            A secure healthcare platform connecting verified doctors and patients.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Automated doctor assignment based on medical need</li>
                            <li>Maintain and view complete health history</li>
                            <li>Digital prescriptions & test recommendations</li>
                            <li>Professional doctor collaboration</li>
                        </ul>
                    </div>
                )}

                {/* Patient Health Issue Form */}
                {section === "form" && (
                    <div className="bg-white shadow-md rounded-lg p-6 max-w-xl">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Submit Your Health Issue</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1 text-gray-600 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleFormChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-700"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-600 font-medium">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={form.age}
                                    onChange={handleFormChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-700"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-600 font-medium">Describe Symptoms</label>
                                <textarea
                                    name="symptoms"
                                    value={form.symptoms}
                                    onChange={handleFormChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-700"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                )}

                {/* Doctor/Patient Dashboard */}
                {section === "dashboard" && (
                    <div className="space-y-6">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg mb-3 font-bold text-gray-700">Assigned Doctor</h3>
                            <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                                <div className="mr-4 bg-blue-100 p-3 rounded-full">
                                    <svg
                                        className="w-8 h-8 text-blue-700"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
                                        <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-bold">{doctors[0].name}</div>
                                    <div className="text-sm text-gray-600">{doctors[0].specialization}</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg mb-3 font-bold text-gray-700">Medical History</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border rounded-lg">
                                    <thead>
                                    <tr className="bg-blue-100 text-left">
                                        <th className="py-2 px-4">Date</th>
                                        <th className="py-2 px-4">Diagnosis</th>
                                        <th className="py-2 px-4">Doctor</th>
                                        <th className="py-2 px-4">Prescription</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {medicalHistory.map((record, idx) => (
                                        <tr
                                            key={idx}
                                            className="hover:bg-gray-50 transition"
                                        >
                                            <td className="py-2 px-4 border-t">{record.date}</td>
                                            <td className="py-2 px-4 border-t">{record.diagnosis}</td>
                                            <td className="py-2 px-4 border-t">{record.doctor}</td>
                                            <td className="py-2 px-4 border-t">{record.prescription}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Doctor Collaboration Area */}
                {section === "collab" && (
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Doctor Directory</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {doctors.map((doc, idx) => (
                                <div
                                    key={idx}
                                    className="bg-blue-50 border border-blue-100 shadow-sm rounded-lg p-4 flex items-center hover:shadow-md transition"
                                >
                                    <div className="mr-4 bg-blue-100 p-3 rounded-full">
                                        <svg
                                            className="w-8 h-8 text-blue-700"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
                                            <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-bold">{doc.name}</div>
                                        <div className="text-sm text-gray-600">{doc.specialization}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
