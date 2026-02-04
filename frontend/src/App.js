import React from "react";
import QuoteForm from "./components/QuoteForm";
import ClaimForm from "./components/ClaimForm";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Insurance Service Portal</h1>
        <p>
          Get instant quotes and submit claims using the simple tools below. Keep
          customer and policy details handy for faster processing.
        </p>
      </header>
      <main className="app__content">
        <QuoteForm />
        <ClaimForm />
      </main>
    </div>
  );
}

export default App;
