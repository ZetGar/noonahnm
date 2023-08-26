import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";

import { useSelector } from "react-redux/es/hooks/useSelector";

const ContactList = () => {
  const {contactList,keyword} = useSelector((state) => state);

  return (
    <>
      <SearchBox />

      <p>Number: {contactList.length}</p>

      {contactList.map((item, idx) => {
        return <ContactItem key={idx} item={item} />;
      })}
    </>
  );
};

export default ContactList;
