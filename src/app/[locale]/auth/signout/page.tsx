'use client';

import { useTranslations } from 'next-intl';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';

export default function SignOut() {
  const t = useTranslations('Auth');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut({ callbackUrl: '/' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{t('signOut')}</h1>
        
        <p className="mb-6 text-center">{t('signOutConfirmation')}</p>
        
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleSignOut}
            disabled={isLoading}
            className="w-full p-2 text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
          >
            {isLoading ? t('loading') : t('signOutButton')}
          </button>
          
          <Link 
            href="/"
            className="w-full p-2 text-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {t('cancel')}
          </Link>
        </div>
      </div>
    </div>
  );
}