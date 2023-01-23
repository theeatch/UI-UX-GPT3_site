import React from "react";
import "./possibility.css";
import possible from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility-container section__padding" id="possibility">
      <div className="gpt3__possibility-container__image">
        <img src={possible} alt="possible" />
      </div>
      <div className="gpt3__possibility-container-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Sure! GPT-3 has the potential to significantly change the way we use
          and generate language in various fields. In the realm of natural
          language processing, GPT-3 could be used to improve machine
          translation, language generation, and language understanding. It could
          also be used to develop more advanced chatbots and virtual assistants
          that can better understand and respond to user inquiries in a more
          human-like way.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;

