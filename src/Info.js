<<<<<<< HEAD
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
=======
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>Name : </b>
          {name}
        </div>
        <div>
          <b>Nick Name : </b>
          {nickname}
>>>>>>> 0063ddb506ed8e0d54e3d20c16bf520fd8c23e04
        </div>
      </div>
    </div>
  );
};

export default Info;
