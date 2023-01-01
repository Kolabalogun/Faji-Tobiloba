import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Sidebar = () => {
  const { pageState, pageStateF } = useGlobalContext();
  return (
    <div className="adminSidebar lg:w-[17%]  w-[10%] shadow-lg">
      <h3 className="">ADMIN DASHBOARD</h3>

      <div className="menus ">
        <div
          onClick={() => {
            pageStateF("default");
          }}
          className={
            pageState === "default" ? "activemenu eachmenu " : "eachmenu "
          }
        >
          <img src="svg/house.svg" style={{ height: 20 }} alt="" />
          <p>Home</p>
        </div>
        <div
          onClick={() => {
            pageStateF("story");
          }}
          className={
            pageState === "story" ? "activemenu eachmenu " : "eachmenu "
          }
        >
          <img src="svg/message-solid.svg" alt="" />
          <p>My Story</p>
        </div>
        <div
          onClick={() => {
            pageStateF("article");
          }}
          className={
            pageState === "article" ? "activemenu eachmenu " : "eachmenu "
          }
        >
          <img src="svg/blog.svg" alt="" />
          <p>Articles</p>
        </div>
        <div
          onClick={() => {
            pageStateF("message");
          }}
          className={
            pageState === "message" ? "activemenu eachmenu " : "eachmenu "
          }
        >
          <img src="svg/msg.svg" alt="" />
          <p>Messages</p>
        </div>
        <div
          onClick={() => {
            pageStateF("project");
          }}
          className={
            pageState === "project" ? "activemenu eachmenu " : "eachmenu "
          }
        >
          <img src="svg/people.svg" alt="" />
          <p>Projects</p>
        </div>
        <div
          onClick={() => {
            pageStateF("settings");
          }}
          className={
            pageState === "settings" ? "activemenu eachmenu " : "eachmenu "
          }
        >
          <img src="svg/settings.svg" alt="" />
          <p>Settings</p>
        </div>
      </div>
      {/* 
            <div className="foot">
                <div className="sidebarImg">
                    <img src="svg/w (1).svg" alt="" />
                </div>
                <button onClick={() => {
                    pageStateF('student')
                }}>Register Student</button>
            </div> */}
    </div>
  );
};

export default Sidebar;
