import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
{
  /*import { NavLink } from "react-router-dom";*/
}

{
  /*const DialogItem = (props) => {
  let path = "dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
*/
}
{
  /*const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};*/
}

const Dialogs = (props) => {
  {
    /*let dialogs = [
    { id: 1, name: "Faizan" },
    { id: 2, name: "Muhammad" },
    { id: 3, name: "Jakob" },
    { id: 4, name: "Coconut" },
    { id: 5, name: "Aida" },
  ];

  let messages = [
    { id: 1, message: "Hello! How are you?" },
    { id: 2, message: "I'm doing great, thanks for asking!" },
  ];*/
  }

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}

        {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} /> */}
      </div>
      <div className={s.messages}>
        {messagesElements}
        {/*<Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      <Message message={messagesData[2].message} />*/}
      </div>
    </div>
  );
};

export default Dialogs;
