// states.js

const states = [
    { name: "Andhra Pradesh", value: "andhra_pradesh" },
    { name: "Arunachal Pradesh", value: "arunachal_pradesh" },
    { name: "Assam", value: "assam" },
    { name: "Bihar", value: "bihar" },
    { name: "Chhattisgarh", value: "chhattisgarh" },
    { name: "Goa", value: "goa" },
    { name: "Gujarat", value: "gujarat" },
    { name: "Haryana", value: "haryana" },
    { name: "Himachal Pradesh", value: "himachal_pradesh" },
    { name: "Jharkhand", value: "jharkhand" },
    { name: "Karnataka", value: "karnataka" },
    { name: "Kerala", value: "kerala" },
    { name: "Madhya Pradesh", value: "madhya_pradesh" },
    { name: "Maharashtra", value: "maharashtra" },
    { name: "Manipur", value: "manipur" },
    { name: "Meghalaya", value: "meghalaya" },
    { name: "Mizoram", value: "mizoram" },
    { name: "Nagaland", value: "nagaland" },
    { name: "Odisha", value: "odisha" },
    { name: "Punjab", value: "punjab" },
    { name: "Rajasthan", value: "rajasthan" },
    { name: "Sikkim", value: "sikkim" },
    { name: "Tamil Nadu", value: "tamil_nadu" },
    { name: "Telangana", value: "telangana" },
    { name: "Tripura", value: "tripura" },
    { name: "Uttar Pradesh", value: "uttar_pradesh" },
    { name: "Uttarakhand", value: "uttarakhand" },
    { name: "West Bengal", value: "west_bengal" },
    { name: "Andaman and Nicobar Islands", value: "andaman_nicobar" },
    { name: "Chandigarh", value: "chandigarh" },
    { name: "Dadra and Nagar Haveli", value: "dadra_nagar_haveli" },
    { name: "Daman and Diu", value: "daman_diu" },
    { name: "Lakshadweep", value: "lakshadweep" },
    { name: "Delhi", value: "delhi" },
    { name: "Puducherry", value: "puducherry" },
    { name: "Ladakh", value: "ladakh" },
    { name: "Jammu and Kashmir", value: "jammu_kashmir" },
];

document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("states");

    states.forEach((state) => {
        const option = document.createElement("option");
        option.value = state.value;
        option.textContent = state.name;
        selectElement.appendChild(option);
    });
});
