'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function VerifyRequest() {
  const t = useTranslations('Auth');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{t('checkEmail')}</h1>
        
        <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
          <p>{t('verificationLinkSent')}</p>
        </div>
        
        <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
          {t('checkSpam')}
        </p>
        
        <div className="flex flex-col space-y-4">
          <Link 
            href="/auth/signin"
            className="w-full p-2 text-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {t('backToSignIn')}
          </Link>
        </div>
      </div>
    </div>
  );
}