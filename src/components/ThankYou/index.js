import "./thank-you.scss";

export const ThankYou = () => {
  return (
    <div className="thank-you-block">
      <h2 className="main-text">Thank You.</h2>
      <p className="addiotional-text">
        We appreciate your interest in HIREMPIRE. A representative from
        HIREMPIRE will follow up with you soon.
        <br />
        {" "}
        <br />
        In the meantime, we invite you to learn more with the resources below.{" "}
      </p>
      <button className="back-btn confirm-btn">Back</button>
    </div>
  );
};
