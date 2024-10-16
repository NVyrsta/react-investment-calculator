const UserInput = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>

          <input
            type="number"
            value={userInput.initialInvestment}
            name="initialInvestment"
            required
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>

          <input
            type="number"
            value={userInput.annualInvestment}
            name="annualInvestment"
            required
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>

          <input
            type="number"
            value={userInput.expectedReturn}
            name="expectedReturn"
            required
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>

          <input
            type="number"
            name="duration"
            value={userInput.duration}
            required
            min="1"
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
