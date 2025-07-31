'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { usePathname } from 'next/navigation';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState({
    isSignedIn: false,
    username: undefined as string | undefined,
    userPhoto: undefined as string | undefined,
    isLoading: true,
  });
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        setAuthState({
          isSignedIn: false,
          username: undefined,
          userPhoto: undefined,
          isLoading: false,
        });
        return;
      }

      try {
        const decoded = jwt.decode(token) as {
          username?: string;
          userPhoto?: string;
          exp?: number;
          [key: string]: unknown;
        };

        // Check token expiration
        const isTokenValid = decoded?.exp
          ? decoded.exp * 1000 > Date.now()
          : false;

        if (!isTokenValid) {
          throw new Error('Token expired');
        }

        setAuthState({
          isSignedIn: true,
          username: decoded?.username,
          userPhoto: decoded?.userPhoto,
          isLoading: false,
        });
      } catch (error) {
        console.error('Authentication error:', error);
        localStorage.removeItem('authToken');
        setAuthState({
          isSignedIn: false,
          username: undefined,
          userPhoto: undefined,
          isLoading: false,
        });
      }
    };

    checkAuth();
  }, [pathname]); // Re-run when route changes

  if (authState.isLoading) {
    return (
      <html lang="en">
      <body suppressHydrationWarning={true}>
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
      </body>
      </html>
    );
  }

  return (
    <html lang="en">
    <body suppressHydrationWarning={true}>
    <Navbar
      isSignedIn={authState.isSignedIn}
      username={authState.username}
      userPhoto={
        authState.userPhoto?.startsWith('http')
          ? authState.userPhoto
          : authState.userPhoto
            ? `http://localhost:5011${authState.userPhoto}`
            : undefined
      }
      key={authState.isSignedIn ? 'authenticated' : 'guest'} // Force re-render on auth change
    />
    {children}
    <Footer />
    </body>
    </html>
  );
}