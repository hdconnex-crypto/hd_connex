import React, { useState } from "react";
import axios from "axios";

const initialState = {
  customerId: "",
  policyId: "",
  description: "",
};

function ClaimForm() {
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
        customer_id: parseInt(formData.customerId, 10),
        policy_id: parseInt(formData.policyId, 10),
        description: formData.description,
      };

      const response = await axios.post(
        "http://localhost:8000/claims/",
        payload
      );
      setResult(response.data);
    } catch (error) {
      setResult({ error: "Unable to submit claim. Please verify IDs." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="card">
      <h2>Submit a Claim</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="customerId">Customer ID</label>
          <input
            id="customerId"
            name="customerId"
            type="number"
            min="1"
            value={formData.customerId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="policyId">Policy ID</label>
          <input
            id="policyId"
            name="policyId"
            type="number"
            min="1"
            value={formData.policyId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Claim description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit claim"}
        </button>
      </form>
      {result && (
        <div className="result">
          {result.error ? (
            <p>{result.error}</p>
          ) : (
            <>
              <p>Claim ID: {result.id}</p>
              <p>Status: {result.status}</p>
              <p>Created at: {result.created_at}</p>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default ClaimForm;
