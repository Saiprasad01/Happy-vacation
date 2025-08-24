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
  Settings 
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

  return (
    <aside className={styles.sidebar}>      
      <nav className={styles.navMenu}>
        {menuItems.map((item) => {
          const Icon = item.icon;
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
              <Icon className={styles.navIcon} />
              <span className={styles.navText}>{item.name}</span>
              {item.badge && (
                <span className={styles.navBadge}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
