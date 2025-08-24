import React from 'react'
import Link from "next/link"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.brandLogo}>
          <img src="./brandlogo.svg" alt="Logo" className="h-8 w-8"/>
          {/* <img src="./happyvacation.png" alt="Logo" className="h-8 w-8"/> */}
          <div className={styles.brandName}>JoyTrip</div>
        </div>
        <Link href="/">Dashboard</Link>
        <Link href="/localtransport">Local Transport</Link>
        <Link href="/attractions">Attraction</Link>
        <Link href="/food">Food</Link>
        <Link href="/itinerary">Itinerary</Link>
      </nav>
    </header>
  );
};

export default Navbar