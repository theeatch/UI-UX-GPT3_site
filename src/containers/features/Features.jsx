import React from "react";
import "./features.css";
import { Feature } from "../../components";

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        <Feature
          title="Improved language understanding"
          text=" While the model is already able to generate text that is coherent and similar to human writing, it still has difficulty fully understanding certain nuances and subtleties of language."
        />
        <Feature
          title="Increased personalization"
          text=" In the future, GPT-3 could be trained on more personalized data sets and learn to incorporate personalization into its text generation."
        />
        <Feature
          title="Integration with other technologies"
          text="Such integration could lead to more advanced applications such as voice-controlled virtual assistance or assistive technology for visually impaired."
        />
        <Feature
          title="Advanced application"
          text="It could be used to automate the task of writing code, creating a more efficient development process and reduce the human errors."
        />
      </div>
    </div>
  );
};

export default Features;
