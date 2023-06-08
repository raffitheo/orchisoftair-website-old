import React from "react"

import ContactsProps from "./IContactsProps"

import ContactElement from "./ContactElement/ContactElement"

import styles from "./Contacts.module.scss"

const Contacts = (componentProps: ContactsProps) => (
  <div id={styles["ContactsWrapper"]}>
    <div id={styles["ContactsContainer"]}>
      {componentProps.contacts.map((contact, index) => (
        <ContactElement
          key={`ContactElement${index}`}
          index={index}
          icon={contact.icon}
          info={contact.info}
          title={contact.title}
        />
      ))}
    </div>
  </div>
)

export default Contacts
