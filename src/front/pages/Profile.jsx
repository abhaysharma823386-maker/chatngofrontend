// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
// import toast, { Toaster } from "react-hot-toast";
import { FaBoxOpen, FaCreditCard } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Profile() {
    const [profile, setProfile] = useState({});
    const [inputData, setInputData] = useState({});

    // Fetch profile data
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("No token found");
            return;
        }

        const baseURL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
        axios
            .get(`${baseURL}/api/profile/`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log("Profile API response:", res.data);
                const user = res.data.userprofile || res.data.user || res.data;
                setProfile(user);
                setInputData({
                    ...user,
                    fname: user.first_name || user.fname || "",
                    lname: user.last_name || user.lname || "",
                    profilePic: user.profilePic || "",
                });
            })
            .catch((err) => {
                console.error("Profile fetch error:", err);
                toast.error("Failed to fetch profile");
            });
    }, []);

    // Logout function
    const logout = () => {
        localStorage.removeItem("token");
        toast.success("Logged out");
        setTimeout(() => (window.location.href = "/signup"), 1500);
    };

    // Handle input change
    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    // Save updated profile
    const save = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please login first");
            return;
        }

        const baseURL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

        const updateData = {
            first_name: inputData.fname || "",
            last_name: inputData.lname || "",
            gender: inputData.gender || "",
            number: inputData.number || "",
        };

        console.log("Sending update data:", updateData);

        axios
            .put(`${baseURL}/api/profile/update/`, updateData, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log("Update response:", res.data);
                toast.success(
                    res.data.msg ||
                    res.data.message ||
                    "Profile updated successfully"
                );

                const updatedUser = res.data.updatedUser || res.data.user || res.data;
                setProfile(updatedUser);
                setInputData({
                    ...updatedUser,
                    fname: updatedUser.first_name || updatedUser.fname || "",
                    lname: updatedUser.last_name || updatedUser.lname || "",
                });

                // Update local storage
                const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
                const newUserData = { ...currentUser, ...updatedUser };
                localStorage.setItem("user", JSON.stringify(newUserData));
            })
            .catch((err) => {
                console.error("Update error:", err);
                const errorMsg =
                    err.response?.data?.msg ||
                    err.response?.data?.message ||
                    err.response?.data?.error ||
                    "Update failed";
                toast.error(errorMsg);
            });
    };

    return (
        <div className="flex flex-col md:flex-row bg-gray-100 p-2 md:p-8">
            <Toaster position="top-right" />

            {/* Sidebar */}
            <div className="w-full md:w-96 bg-white rounded-lg shadow-md p-6 space-y-3 md:space-y-6">
                <div className="flex items-center gap-4">
                    <img
                        src={
                            profile.profilePic ||
                            "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                        }
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-semibold">Hello</h2>
                        <p className="text-gray-600">
                            {profile.first_name || profile.fname || "User"}
                        </p>
                    </div>
                </div>

                <div className="space-y-4 mt-4">
                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
                        <FaBoxOpen className="text-lg" />
                        <Link to="/orderhistory">
                            <p className="font-medium">My Orders</p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
                        <FaCreditCard className="text-lg" />
                        <p className="font-medium">Payments</p>
                    </div>
                    <div
                        className="flex items-center gap-3 cursor-pointer hover:text-red-500 transition"
                        onClick={logout}
                    >
                        <FiLogOut className="text-lg" />
                        <p className="font-medium">Logout</p>
                    </div>
                </div>
            </div>

            {/* Profile Edit Section */}
            <div className="w-full min-h-screen mt-6 md:mt-0 md:ml-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4">Personal Information</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <input
                        type="text"
                        name="fname"
                        value={inputData.fname || ""}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        name="lname"
                        value={inputData.lname || ""}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        placeholder="Last Name"
                    />
                </div>

                <div className="mb-6">
                    <p className="mb-2 font-medium">Gender</p>
                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={inputData.gender === "male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={inputData.gender === "female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                </div>

                <input
                    type="text"
                    name="number"
                    value={inputData.number || ""}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mb-4"
                    placeholder="Mobile Number"
                />

                <input
                    type="email"
                    value={profile.email || ""}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="border p-2 rounded w-full mb-6"
                    placeholder="Email"
                />
                <button
                    onClick={save}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded px-6 transition"
                >
                    Save
                </button>
            </div>
        </div>
    );
}
