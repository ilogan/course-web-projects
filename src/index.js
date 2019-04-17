import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Jim"
        timeAgo="Today at 4:45PM"
        content="Nice!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jacob"
        timeAgo="Today at 2:45AM"
        content="Super cool, man"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jared"
        timeAgo="Yesterday at 11:45PM"
        content="ugh..."
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
