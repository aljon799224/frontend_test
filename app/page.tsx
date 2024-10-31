"use client";
import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./gallery";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  // data from https://jsonplaceholder.typicode.com/users

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  console.log(users);
  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
