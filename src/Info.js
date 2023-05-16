import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("Complete Randering");
    console.log({ name, nickname });
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, [name, nickname]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>Name :</b> {name}
        </div>
        <div>
          <b>Nick Name :</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
