// ==========================================
// MEDI ACCESS - HEALTHCARE DATA
// ==========================================


// ==========================================
// DEPARTMENTS
// ==========================================

export const departments = [
  {
    name: "Cardiology",
    icon: "❤️",
  },
  {
    name: "Neurology",
    icon: "🧠",
  },
  {
    name: "Orthopedics",
    icon: "🦴",
  },
  {
    name: "ENT",
    icon: "👂",
  },
  {
    name: "General Physician",
    icon: "🩺",
  },
  {
    name: "Pediatrics",
    icon: "👶",
  },
  {
    name: "Gynecology",
    icon: "👩‍⚕️",
  },
  {
    name: "Dermatology",
    icon: "🧴",
  },
  {
    name: "Ophthalmology",
    icon: "👁️",
  },
  {
    name: "Dental",
    icon: "🦷",
  },
  {
    name: "Urology",
    icon: "🩺",
  },
  {
    name: "Gastroenterology",
    icon: "🩺",
  },
  {
    name: "Pulmonology",
    icon: "🫁",
  },
  {
    name: "Oncology",
    icon: "🎗️",
  },
  {
    name: "Psychiatry",
    icon: "🧠",
  },
  {
    name: "Physiotherapy",
    icon: "🏃",
  },
];


// ==========================================
// DOCTORS
// ==========================================

export const doctors = [
  {
    id: 1,
    name: "Dr. Rahul Kumar",
    specialization: "Cardiology",
    location: "Vijayawada",
    hospital: "City Care Hospital",
    fee: 500,
    rating: 4.9,
    experience: 8,
    availableToday: true,
    availableTomorrow: true,
  },

  {
    id: 2,
    name: "Dr. Ananya Reddy",
    specialization: "Dermatology",
    location: "Hyderabad",
    hospital: "Medicare Hospital",
    fee: 400,
    rating: 4.8,
    experience: 6,
    availableToday: true,
    availableTomorrow: false,
  },

  {
    id: 3,
    name: "Dr. Arjun Rao",
    specialization: "General Physician",
    location: "Guntur",
    hospital: "Care Plus Hospital",
    fee: 300,
    rating: 4.7,
    experience: 5,
    availableToday: false,
    availableTomorrow: true,
  },

  {
    id: 4,
    name: "Dr. Priya Sharma",
    specialization: "Gynecology",
    location: "Vijayawada",
    hospital: "Rainbow Health Hospital",
    fee: 600,
    rating: 4.8,
    experience: 9,
    availableToday: true,
    availableTomorrow: true,
  },

  {
    id: 5,
    name: "Dr. Sneha Varma",
    specialization: "Pediatrics",
    location: "Hyderabad",
    hospital: "Sunrise Hospital",
    fee: 450,
    rating: 4.7,
    experience: 7,
    availableToday: false,
    availableTomorrow: true,
  },

  {
    id: 6,
    name: "Dr. Kiran Reddy",
    specialization: "Orthopedics",
    location: "Guntur",
    hospital: "Life Care Hospital",
    fee: 550,
    rating: 4.6,
    experience: 11,
    availableToday: true,
    availableTomorrow: true,
  },

  {
    id: 7,
    name: "Dr. Vivek Rao",
    specialization: "Neurology",
    location: "Vijayawada",
    hospital: "Apollo Care Hospital",
    fee: 800,
    rating: 4.9,
    experience: 14,
    availableToday: false,
    availableTomorrow: true,
  },

  {
    id: 8,
    name: "Dr. Meena Devi",
    specialization: "Ophthalmology",
    location: "Hyderabad",
    hospital: "Vision Care Hospital",
    fee: 350,
    rating: 4.6,
    experience: 6,
    availableToday: true,
    availableTomorrow: false,
  },

  {
    id: 9,
    name: "Dr. Suresh Babu",
    specialization: "Dental",
    location: "Guntur",
    hospital: "Smile Dental Hospital",
    fee: 300,
    rating: 4.7,
    experience: 8,
    availableToday: true,
    availableTomorrow: true,
  },

  {
    id: 10,
    name: "Dr. Kavya Rao",
    specialization: "ENT",
    location: "Vijayawada",
    hospital: "Health First Hospital",
    fee: 450,
    rating: 4.8,
    experience: 7,
    availableToday: false,
    availableTomorrow: true,
  },

  {
    id: 11,
    name: "Dr. Naveen Kumar",
    specialization: "Urology",
    location: "Hyderabad",
    hospital: "Metro Health Hospital",
    fee: 700,
    rating: 4.7,
    experience: 12,
    availableToday: true,
    availableTomorrow: true,
  },

  {
    id: 12,
    name: "Dr. Lakshmi Priya",
    specialization: "Gastroenterology",
    location: "Guntur",
    hospital: "Care Medical Centre",
    fee: 650,
    rating: 4.6,
    experience: 10,
    availableToday: false,
    availableTomorrow: true,
  },

  {
    id: 13,
    name: "Dr. Harish Varma",
    specialization: "Pulmonology",
    location: "Vijayawada",
    hospital: "Health Point Hospital",
    fee: 600,
    rating: 4.7,
    experience: 9,
    availableToday: true,
    availableTomorrow: false,
  },

  {
    id: 14,
    name: "Dr. Pooja Singh",
    specialization: "Psychiatry",
    location: "Hyderabad",
    hospital: "Wellness Hospital",
    fee: 500,
    rating: 4.8,
    experience: 8,
    availableToday: true,
    availableTomorrow: true,
  },

  {
    id: 15,
    name: "Dr. Ramesh Babu",
    specialization: "Physiotherapy",
    location: "Guntur",
    hospital: "Rehab Care Centre",
    fee: 250,
    rating: 4.6,
    experience: 6,
    availableToday: false,
    availableTomorrow: true,
  },
];


// ==========================================
// HOSPITALS
// ==========================================

export const hospitals = [
  {
    id: 1,
    name: "City Care Hospital",
    location: "Vijayawada",
    type: "Private",
    departments: [
      "Cardiology",
      "Neurology",
      "General Physician",
      "Gynecology",
    ],
  },

  {
    id: 2,
    name: "Medicare Hospital",
    location: "Hyderabad",
    type: "Private",
    departments: [
      "Dermatology",
      "Orthopedics",
      "Pediatrics",
      "Urology",
    ],
  },

  {
    id: 3,
    name: "Care Plus Hospital",
    location: "Guntur",
    type: "Private",
    departments: [
      "General Physician",
      "Dental",
      "ENT",
      "Physiotherapy",
    ],
  },

  {
    id: 4,
    name: "Rainbow Health Hospital",
    location: "Vijayawada",
    type: "Private",
    departments: [
      "Gynecology",
      "Pediatrics",
      "Dermatology",
    ],
  },

  {
    id: 5,
    name: "Sunrise Hospital",
    location: "Hyderabad",
    type: "Private",
    departments: [
      "Pediatrics",
      "Cardiology",
      "Ophthalmology",
    ],
  },

  {
    id: 6,
    name: "Life Care Hospital",
    location: "Guntur",
    type: "Private",
    departments: [
      "Orthopedics",
      "Physiotherapy",
      "General Physician",
    ],
  },

  {
    id: 7,
    name: "Apollo Care Hospital",
    location: "Vijayawada",
    type: "Private",
    departments: [
      "Neurology",
      "Cardiology",
      "Oncology",
    ],
  },

  {
    id: 8,
    name: "Vision Care Hospital",
    location: "Hyderabad",
    type: "Private",
    departments: [
      "Ophthalmology",
      "Dental",
      "ENT",
    ],
  },

  {
    id: 9,
    name: "Smile Dental Hospital",
    location: "Guntur",
    type: "Private",
    departments: [
      "Dental",
      "Oral Surgery",
    ],
  },

  {
    id: 10,
    name: "Health First Hospital",
    location: "Vijayawada",
    type: "Private",
    departments: [
      "ENT",
      "General Physician",
      "Pulmonology",
    ],
  },

  {
    id: 11,
    name: "Metro Health Hospital",
    location: "Hyderabad",
    type: "Private",
    departments: [
      "Urology",
      "Gastroenterology",
      "Cardiology",
    ],
  },

  {
    id: 12,
    name: "Care Medical Centre",
    location: "Guntur",
    type: "Private",
    departments: [
      "Gastroenterology",
      "General Physician",
      "Dermatology",
    ],
  },

  {
    id: 13,
    name: "Health Point Hospital",
    location: "Vijayawada",
    type: "Private",
    departments: [
      "Pulmonology",
      "Cardiology",
      "General Physician",
    ],
  },

  {
    id: 14,
    name: "Wellness Hospital",
    location: "Hyderabad",
    type: "Private",
    departments: [
      "Psychiatry",
      "Neurology",
      "General Physician",
    ],
  },

  {
    id: 15,
    name: "Rehab Care Centre",
    location: "Guntur",
    type: "Private",
    departments: [
      "Physiotherapy",
      "Orthopedics",
      "Pain Management",
    ],
  },
];