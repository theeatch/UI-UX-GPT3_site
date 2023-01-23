import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin section__padding" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is a powerful language generation model developed by OpenAI. It uses deep learning techniques to generate text that is coherent and similar to human writing. GPT-3 can be fine-tuned for a variety of language tasks such as language translation, question-answering, text summarization, and more." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="It can also be used to generate responses in real-time, providing users with a more seamless and natural conversational experience." />
      <Feature title="Knowledgebase" text="GPT-3 is pre-trained on a massive amount of text data, which enables it to have a wide range of knowledge on various topics." />
      <Feature title="Education" text="It can also be used to assist teachers in creating and grading exams, and for summarizing complex readings or research papers." />
    </div>
  </div>
);

export default WhatGPT3;