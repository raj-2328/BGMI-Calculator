import React, { useState } from "react";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  // Function to calculate BMI
  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) {
      alert("Please enter valid positive numbers for height and weight.");
      return;
    }

    const bmiValue = w / ((h / 100) ** 2); // Convert height from cm to meters
    const roundedBMI = parseFloat(bmiValue.toFixed(1));
    setBMI(roundedBMI);
    setCategory(getCategory(roundedBMI));
  };

  // Function to determine category
  const getCategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  };

  // Reset function
  const reset = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setCategory("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />

      <button onClick={calculateBMI}>Calculate BMI</button>
      <button onClick={reset}>Reset</button>

      {/* Conditionally render result */}
      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
