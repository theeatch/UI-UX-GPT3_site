import React from "react";
import "./footer.css";
import gpt3 from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <div className="gpt3__footer-button">
          <button type="button">Request Acces</button>
        </div>
      </div>
      <div className="gpt3__footer__links-container">
        <div className="gpt3__footer__links-container__copy">
          <img src={gpt3} alt="logoimg" />
          <p>sususamogus I12 182 DH AmogSuS, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Chatgpt</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>SussusAmogus Street IL0 17E DH AmogSus</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
