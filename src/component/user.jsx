import axios from "axios";
import React, { useState,useEffect } from "react";
import styles from './user.module.css';

export default function User({ user, handleOnClickAff,handleOnClickCach, getIdActive }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (getIdActive === user.id) {
      const getPosts = async () => {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        return res.data;
      };
      getPosts().then((posts) => setPosts(posts));
    }
  }, [getIdActive]);

  return (
    <div key={user.id} className={styles.user}>
      <h3 className={styles.titles} >nom: <span className={styles.info}> {user.name}</span></h3>
      <p className={styles.titles} >Email: <span className={styles.info}> {user.email}</span> </p>
      <p className={styles.titles} >ville:<span className={styles.info}> {user.address.city}</span> </p>
      {
        user.id===getIdActive ?
      <button onClick={() => handleOnClickCach(user.id)} className={styles.btns}>Cacher les Posts</button>
      :
      <button onClick={() => handleOnClickAff(user.id)} className={styles.btns}>Voir les Postes</button>


    }
      {
        getIdActive===user.id && 
        posts.map(p=>(
        <div className={styles.posts}>
            <h4 className={styles.titles} >{p.title}</h4>
            <p className={styles.bodyP}>{p.body}</p>
        </div>
        ))
    }


    </div>
   
  );
}
