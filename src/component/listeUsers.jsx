import React, { useEffect, useState } from "react";
import styles from './listeUsers.module.css';
import axios from "axios";
import User from "./user";

export default function ListeUsers() {
  const [users, setUsers] = useState([]);
  const [getIdActive, setGetIdActive] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    };
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div id={styles.all}>
      <h1 id={styles.nbr_users}>Nombres des utilisateurs: {users.length}</h1>
      <div id={styles.users}>
      {users.map((u) => (
        <User user={u} handleOnClickAff={(id) => setGetIdActive(id)} getIdActive={getIdActive} handleOnClickCach={()=>setGetIdActive(null)}/>
      ))}
      </div>
    </div>
  );
}
