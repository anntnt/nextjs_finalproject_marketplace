'use client';
import type { User } from '../migrations/0000-createTableUsers';
import Navbar from './Navbar';

export default function Component() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <Navbar />
    </header>
  );
}
