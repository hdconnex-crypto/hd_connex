import React, { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  coverageAmount: "",
};

function QuoteForm() {
  const [formData, setFormData] = useState(initialState);
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        coverage_amount: parseFloat(formData.coverageAmount),
      };

      const response = await axios.post(
        "http://localhost:8000/quotes/",
        payload
      );
      setResult(response.data);
    } catch (error) {
      setResult({ error: "Unable to create quote. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="card">
      <h2>Create a Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Customer name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="coverageAmount">Coverage amount</label>
          <input
            id="coverageAmount"
            name="coverageAmount"
            type="number"
            min="0"
            step="0.01"
            value={formData.coverageAmount}
            onChange={handleChange}
            required
          />
        </div>
        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Generate quote"}
        </button>
      </form>
      {result && (
        <div className="result">
          {result.error ? (
            <p>{result.error}</p>
          ) : (
            <>
              <p>Quote ID: {result.id}</p>
              <p>Coverage: ${result.coverage_amount}</p>
              <p>Premium: ${result.premium}</p>
              <p>Status: {result.status}</p>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default QuoteForm;
