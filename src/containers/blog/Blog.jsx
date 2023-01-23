import React from "react";
import "./blog.css";
import {Article} from "../../components";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div className="gpt3__blog" id="blog">
      <div className="gpt3__blog-heading gradient__text section__margin">
        <h1 >A lot is happening, We are blogging about it.</h1>
      </div>

      <div className="gpt3__blog-articles__container section__margin">
        <div className="gpt3__blog-articles__container-groupA">
      <Article image={blog01}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"  />
      </div>

      <div className="gpt3__blog-articles__container-groupB">
        <Article image={blog02}  date="Sep 20, 2021" title="The Future of Content Creation: How GPT-3 is Making it Easier Than Ever"  />
        
        
        <Article image={blog03}  date="Sep 21, 2021" title="The Impact of GPT-3 on Natural Language Processing and Beyond"  />
        <Article image={blog04}  date="oct 26, 2021" title="GPT-3 in Education: How AI is Changing the Way We Learn"  />
        <Article image={blog05}  date="Sep 10, 2021" title="Revolutionizing Chatbot Technology: How GPT-3 is Changing the Game"  />
        </div>
      </div>
    </div>
  );
};

export default Blog;
