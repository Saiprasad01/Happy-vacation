'use client';
import React from 'react';
import { useState } from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';

import { 
  FileText, 
  Car, 
  MapPin, 
  Utensils, 
  Send, 
  Settings, 
  ToggleRight,
  ToggleLeft
} from 'lucide-react';

export default function Sidebar() {

  const[activeTab,setActiveTab] = useState("/");
  const menuItems = [
    { 
      name: 'Dashboard', 
      icon: FileText, 
      href: '/', 
      badge: null 
    },
    { 
      name: 'Local Transport', 
      icon: Car, 
      href: '/localtransport', 
      badge: null 
    },
    { 
      name: 'Attractions & Activities', 
      icon: MapPin, 
      href: '/attractions', 
      badge: null 
    },
    { 
      name: 'Food & Pre-Order', 
      icon: Utensils, 
      href: '/food', 
      badge: null 
    },
    { 
      name: 'Smart Itinerary', 
      icon: Send, 
      href: '/itinerary', 
      badge: null 
    },
    { 
      name: 'Settings', 
      icon: Settings, 
      href: '/settings', 
      badge: null 
    },
  ];
  const rightToggle = ToggleRight;
  const leftToggle = ToggleLeft;
  const [isOpen, setIsOpen] = useState(true);
  const TogglerIcon = isOpen ? leftToggle : rightToggle;
  return (
    <aside className={styles.sidebar}> 
      <div onClick={()=>setIsOpen(!isOpen)} className={styles.toggler}>
        <TogglerIcon className={styles.togglerIcon} />
      </div>     
      <nav className={styles.navMenu}>
        {menuItems.map((item) => {
          const Image = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick = {() => 
                setActiveTab(item.href)
              }
              // className={`styles.nav-item ${item.active ? 'styles.active' : ''}`}
              className={`${styles['navItem']} ${activeTab == item.href ? styles.active : ''}`}
            >
              <Image className={styles.navIcon} />
              {isOpen && 
                  <span className={styles.navText}>{item.name}</span>
              }
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
