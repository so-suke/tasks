import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <header>
        <span className="logo">Tasks</span>
      </header>
      <div className="">登録フォーム</div>
      <div>
        <div>タスク一覧(未完了)</div>
        <div>区切り線</div>
        <div>
          <span>? items completed</span>
          <div>タスク一覧(完了済)</div>
        </div>
      </div>
    </div>
  );
};

export default App;
