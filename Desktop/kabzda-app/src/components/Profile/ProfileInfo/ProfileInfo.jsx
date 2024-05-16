import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://voicesoncentralasia.org/wp-content/uploads/2019/10/71858040_532712730835246_6517306619036958720_n-1000x639.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
