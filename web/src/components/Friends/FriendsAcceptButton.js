import React from "react";
import { Avatar, MenuItem } from "@mui/material";
import {CloseButton} from "react-bootstrap"
import axios from "axios";

export default function FriendsAcceptButton({ friend, handleClose }) {
  const token = localStorage.getItem("JWT");
  // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJQayI6IjIiLCJpYXQiOjE2NDM4NTQ1MDIsImV4cCI6MTY0NjQ0NjUwMn0.s4B6viyO_tR8lZMUdxW62u82uT08ZltwgEBpuvTBZOQ';
  const userEmail = localStorage.getItem("email");

  const friendsAcceptRequest = () => {
    axios
      .post("http://i6d104.p.ssafy.io:9999/api/friend/isaccept", {
        headers: {
          "X-AUTH-TOKEN": `${token}`,
        },
        applicant: `${userEmail}`, // 로그인한 사용자 email
        friendName: `${friend.friendEmail}`,
      })
      .then(() => {
        alert("친구추가 성공");
        handleClose();
      });
  };

  return (
    <>
      <div className='FriendsAcceptButton'>
        <Avatar alt='' src='/static/images/avatar/1.jpg' sx={{ color: "#ed6991" , marginLeft: "10%"}}/>
        {friend.friendName}
        <MenuItem  >
          <button
          onClick={friendsAcceptRequest}
          style={{backgroundColor: "#ed6991", color: "white", borderRadius: "1rem", paddingLeft: "10%", paddingRight: "10%", borderStyle: "none"}}
          >수락</button>
          {/* <CloseButton style={{marginLeft: "10%"}}/> */}
          </MenuItem>
      </div>
    </>
  );
}
