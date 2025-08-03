// color-picker component
import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("green");

    const handleColorChange = (e) => {
        return (setColor(e.target.value))
    }
  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display-container">
          <p>Selected color is:</p>
          <div className="color-display" style={{ backgroundColor: color }}>
            {color}
          </div>
        </div>
        <div className="color-selector-container">
          <label htmlFor="color">Select a Color</label>
          <input
            type="color"
            name="color"
            value={color}
            onChange={handleColorChange}
          />
        </div>
      </div>
    </>
  );
};

export default ColorPicker;

// app component
import React from 'react'
import List from './components/List'
import ColorPicker from './components/ColorPicker'

const App = () => {
  return (
    <>
      <ColorPicker />
    </>
  )
}

// export default App

// diet-chart component
import React from 'react';

const DietChartList = () => {
  const dietChart = [
    { id: 1, foodItem: "Oatmeal", calories: 150, type: "Carbohydrate" },
    { id: 2, foodItem: "Boiled Egg", calories: 78, type: "Protein" },
    { id: 3, foodItem: "Greek Yogurt", calories: 100, type: "Protein" },
    { id: 4, foodItem: "Avocado", calories: 240, type: "Healthy Fat" },
    { id: 5, foodItem: "Brown Rice", calories: 215, type: "Carbohydrate" },
    { id: 6, foodItem: "Grilled Chicken Breast", calories: 165, type: "Protein" },
    { id: 7, foodItem: "Broccoli", calories: 55, type: "Vegetable" },
    { id: 8, foodItem: "Almonds (10 pcs)", calories: 70, type: "Healthy Fat" },
    { id: 9, foodItem: "Banana", calories: 120, type: "Fruit" },
    { id: 10, foodItem: "Apple", calories: 95, type: "Fruit" },
    { id: 11, foodItem: "Cucumber", calories: 16, type: "Vegetable" },
    { id: 12, foodItem: "Cottage Cheese", calories: 98, type: "Protein" }
  ];

  return (
    <div style={{
      maxWidth: "400px",
      margin: "2rem auto",
      padding: "1rem",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      background: "#fafafa",
      fontFamily: "sans-serif"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem", fontSize: "1.3rem" }}>Diet Chart List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {dietChart.map(item => (
          <li
            key={item.id}
            style={{
              padding: "0.5rem 0",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>
              <strong>{item.foodItem}</strong> <span style={{ color: "#888" }}>({item.type})</span>
            </span>
            <span style={{ color: "#4caf50", fontWeight: 500 }}>{item.calories} cal</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default DietChartList;
