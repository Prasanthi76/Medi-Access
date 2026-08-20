import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Symptoms.css";

function Symptoms() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const analyzeSymptoms = () => {
    const text = symptoms.toLowerCase().trim();

    if (!text) {
      setResult({
        specialist: "Please enter your symptoms.",
        description: "Enter one or more symptoms to get a suitable specialist suggestion.",
        type: "empty",
      });
      return;
    }

    let specialist = "General Physician";
    let description =
      "A General Physician can evaluate your symptoms and guide you to the appropriate specialist if needed.";

    // Skin-related symptoms
    if (
      text.includes("skin") ||
      text.includes("rash") ||
      text.includes("itching") ||
      text.includes("acne") ||
      text.includes("pimples")
    ) {
      specialist = "Dermatology";
      description =
        "Your symptoms may be suitable for consultation with a Dermatologist.";
    }

    // Heart-related symptoms
    else if (
      text.includes("chest pain") ||
      text.includes("heart") ||
      text.includes("palpitation")
    ) {
      specialist = "Cardiology";
      description =
        "Your symptoms may be suitable for consultation with a Cardiologist.";
    }

    // Brain / nervous system
    else if (
      text.includes("headache") ||
      text.includes("migraine") ||
      text.includes("seizure") ||
      text.includes("numbness")
    ) {
      specialist = "Neurology";
      description =
        "Your symptoms may be suitable for consultation with a Neurologist.";
    }

    // Bone / joint
    else if (
      text.includes("bone") ||
      text.includes("joint pain") ||
      text.includes("back pain") ||
      text.includes("knee pain")
    ) {
      specialist = "Orthopedics";
      description =
        "Your symptoms may be suitable for consultation with an Orthopedic specialist.";
    }

    // Ear / nose / throat
    else if (
      text.includes("ear pain") ||
      text.includes("hearing") ||
      text.includes("sinus") ||
      text.includes("throat pain")
    ) {
      specialist = "ENT";
      description =
        "Your symptoms may be suitable for consultation with an ENT specialist.";
    }

    // Eye
    else if (
      text.includes("eye pain") ||
      text.includes("blurred vision") ||
      text.includes("vision")
    ) {
      specialist = "Ophthalmology";
      description =
        "Your symptoms may be suitable for consultation with an Ophthalmologist.";
    }

    // Teeth
    else if (
      text.includes("tooth") ||
      text.includes("teeth") ||
      text.includes("gum pain")
    ) {
      specialist = "Dental";
      description =
        "Your symptoms may be suitable for consultation with a Dental specialist.";
    }

    // Children's symptoms
    else if (
      text.includes("child") ||
      text.includes("baby") ||
      text.includes("infant")
    ) {
      specialist = "Pediatrics";
      description =
        "For children, a Pediatrician is the appropriate specialist to consult.";
    }

    // Women's health
    else if (
      text.includes("period") ||
      text.includes("menstrual") ||
      text.includes("pregnancy")
    ) {
      specialist = "Gynecology";
      description =
        "Your symptoms may be suitable for consultation with a Gynecologist.";
    }

    setResult({
      specialist,
      description,
      type: "success",
    });
  };

  const findDoctors = () => {
    if (result && result.specialist) {
      navigate(`/doctors?specialization=${encodeURIComponent(result.specialist)}`);
    }
  };

  return (
    <div className="symptoms-page">

      {/* NAVBAR */}

      <nav className="symptoms-navbar">

        <div className="symptoms-brand">
          <span>Medi Access</span>
          <span>🏥</span>
        </div>

        <div className="symptoms-nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/doctors">
            Doctors
          </Link>

          <Link to="/hospitals">
            Hospitals
          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>

      </nav>


      {/* MAIN CONTENT */}

      <main className="symptoms-main">

        <div className="symptoms-card">

          <p className="symptoms-label">
            SMART SPECIALIST SUGGESTION
          </p>

          <h1>
            What symptoms are you experiencing?
          </h1>

          <p className="symptoms-description">
            Enter your symptoms below and Medi Access will
            suggest a suitable medical specialist.
          </p>


          {/* INPUT */}

          <label htmlFor="symptoms">
            Describe your symptoms
          </label>

          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Example: I have skin itching and rashes..."
            rows="6"
          />


          <button
            className="analyze-button"
            onClick={analyzeSymptoms}
          >
            Suggest Specialist
          </button>


          {/* RESULT */}

          {result && (

            <div
              className={
                result.type === "empty"
                  ? "symptom-result empty-result"
                  : "symptom-result"
              }
            >

              {result.type === "success" ? (

                <>
                  <p className="result-label">
                    SUGGESTED SPECIALIST
                  </p>

                  <h2>
                    🩺 {result.specialist}
                  </h2>

                  <p>
                    {result.description}
                  </p>

                  <button
                    className="find-doctor-button"
                    onClick={findDoctors}
                  >
                    Find {result.specialist} Doctors
                  </button>
                </>

              ) : (

                <p>
                  {result.description}
                </p>

              )}

            </div>

          )}


          {/* DISCLAIMER */}

          <div className="symptom-note">

            <strong>Important:</strong>

            <span>
              This tool provides a general specialist suggestion
              based on the symptoms entered. It does not provide
              a medical diagnosis. For medical concerns, consult
              a qualified healthcare professional.
            </span>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Symptoms;