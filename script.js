// COLLEGE DETAILS

const colleges = [

    {
        name: "Kalasalingam Academy of Research and Education",
        location: "Krishnankoil",
        departments: "CSE, IT, AI & DS, ECE, EEE, Mechanical, Civil",
        fees: "₹1,95,000 per year + ₹12,000 other fees (2026-27)",
        quota: "Government deemed university regular fee structure. Management available.",
        hostel: "Boys and Girls hostel available",
        hostelFees: "Approximately ₹80,000 - ₹1,40,000",
        placement: "Good placement training and placement offers",
        website: "https://www.kalasalingam.ac.in/"
    },

    {
        name: "Ramco Institute of Technology",
        location: "Rajapalayam",
        departments: "CSE, ECE, EEE, Mechanical, Civil",
        fees: "₹80,000 - ₹1,40,000",
        quota: "Government quota: ₹80,000. Management quota: ₹1,40,000.",
        hostel: "Boys and Girls hostel available",
        placement: "Highest: ₹5.1 LPA. Average: ₹2.7 LPA (2021-25 report). Placement training and campus recruitment.",
        website: "https://www.ritrjpm.ac.in/"
    },

    {
        name: "PSR Engineering College",
        location: "Sevalpatti, Sivakasi",
        departments: "CSE, ECE, EEE, Mechanical, Civil, Biotechnology, BME",
        fees: "Approximately ₹70,000 - ₹1,30,000",
        quota: "Government quota: approximately ₹70,000. Management quota: ₹1,40,000.",
        hostel: "Separate Boys and Girls hostels available",
        placement: "Highest package: ₹27 LPA. 487 students placed (2023-24 report).",
        website: "https://psr.edu.in/"
    },

    {
        name: "Mepco Schlenk Engineering College",
        location: "Sivakasi",
        departments: "CSE, IT, ECE, EEE, Mechanical, Civil, AI & DS",
        fees: "Approximately ₹70,000 - ₹1,30,000",
        quota: "Government quota: approximately ₹70,000. Management quota: ₹1,40,000.",
        hostel: "Hostel available",
        placement: "Highest package: ₹20 LPA (2025-26 data). Companies include Zoho, Infosys, TCS and Cognizant.",
        website: "https://www.mepcoeng.ac.in/"
    },

    {
        name: "AAA College of Engineering and Technology",
        location: "Amathur, Sivakasi",
        departments: "CSE, CSE Cyber Security, ECE, EEE, Mechanical, Civil, AI & DS, IT",
        fees: "Approximately ₹70,000 - ₹1,30,000",
        quota: "Government quota: approximately ₹70,000. Management quota available.",
        hostel: "Separate Boys and Girls hostels available",
        placement: "204 out of 230 students placed (up to March 28, 2026).",
        website: "https://aaaenggcoll.ac.in/"
    },

    {
        name: "Sri Vidya College of Engineering and Technology",
        location: "Virudhunagar",
        departments: "CSE, ECE, EEE, Mechanical, Civil, AI & DS, CSBS",
        quota: "Government and Management quota available.",
        hostel: "Hostel accommodation facility available",
        placement: "95%+ placement claim on college website.",
        website: "https://www.srividyaengg.ac.in/"
    },

    {
        name: "Kamaraj College of Engineering and Technology",
        location: "K. Vellakulam, Virudhunagar",
        departments: "CSE, IT, ECE, EEE, Mechanical, Civil, AI & DS, Biotechnology, Mechatronics",
        fees: "Counselling fee: ₹98,000 for listed accredited UG courses (2026-27)",
        quota: "Government quota: ₹98,000. Management quota: confirm with college.",
        hostel: "Separate Boys and Girls hostels available",
        hostelFees: "₹80,000 (Hostel: ₹28,000 + Mess: ₹52,000, 2026-27)",
        placement: "Highest package: ₹24 LPA. Average: ₹3.5 LPA. 530+ offers and 163 companies.",
        website: "https://www.kamarajengg.edu.in/"
    }

];


// DISPLAY COLLEGES

const container = document.getElementById("collegeContainer");
const searchInput = document.getElementById("searchInput");
const collegeCount = document.getElementById("collegeCount");

function displayColleges(list) {

    container.innerHTML = "";

    collegeCount.textContent =
        "Showing " + list.length + " of " + colleges.length + " colleges";

    if (list.length === 0) {
        container.innerHTML =
            '<p class="no-results">No colleges found!</p>';
        return;
    }

    list.forEach((college) => {

        const originalIndex = colleges.indexOf(college);

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${college.name}</h2>

            <p><strong>Location:</strong> ${college.location}</p>

            <p><strong>Departments:</strong> ${college.departments}</p>

            <button class="details-btn" data-index="${originalIndex}">
                View Full Details
            </button>

            <div class="details" id="details-${originalIndex}">
                ${createDetails(college)}
            </div>
        `;

        container.appendChild(card);

    });

}


// CREATE DETAILS

function createDetails(college) {

    const fields = [
        ["Fees", college.fees],
        ["Quota Details", college.quota],
        ["Hostel", college.hostel],
        ["Hostel Fees", college.hostelFees],
        ["Placement", college.placement]
    ];

    let html = "";

    fields.forEach(([label, value]) => {

        if (value && value.trim() !== "") {

            html += `
                <p>
                    <strong>${label}:</strong> ${value}
                </p>
            `;

        }

    });

    if (college.website) {

        html += `
            <p>
                <strong>Official Website:</strong>
                <a href="${college.website}" target="_blank">
                    Visit Website
                </a>
            </p>
        `;

    }

    return html;
}


// VIEW FULL DETAILS BUTTON

container.addEventListener("click", function(event) {

    if (event.target.classList.contains("details-btn")) {

        const index = event.target.dataset.index;

        const details = document.getElementById("details-" + index);

        if (details.style.display === "block") {

            details.style.display = "none";
            event.target.textContent = "View Full Details";

        } else {

            details.style.display = "block";
            event.target.textContent = "Hide Details";

        }

    }

});


// SEARCH FUNCTION

searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase().trim();

    const filteredColleges = colleges.filter((college) => {

        return (
            college.name.toLowerCase().includes(searchText) ||
            college.location.toLowerCase().includes(searchText) ||
            college.departments.toLowerCase().includes(searchText)
        );

    });

    displayColleges(filteredColleges);

});


// SHOW ALL 7 COLLEGES WHEN WEBSITE OPENS

displayColleges(colleges);