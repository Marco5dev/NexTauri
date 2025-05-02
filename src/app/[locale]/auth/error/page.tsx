'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';

export default function AuthError() {
  const t = useTranslations('Auth');
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const errorMessages: Record<string, string> = {
    default: t('defaultError'),
    configuration: t('configurationError'),
    accessdenied: t('accessDeniedError'),
    verification: t('verificationError'),
  };

  const errorMessage = error && errorMessages[error] ? errorMessages[error] : errorMessages.default;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-600 dark:text-red-400">
          {t('errorTitle')}
        </h1>
        
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded">
          <p>{errorMessage}</p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <Link 
            href="/auth/signin"
            className="w-full p-2 text-center text-white bg-blue-600 hover:bg-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {t('tryAgain')}
          </Link>
          
          <Link 
            href="/"
            className="w-full p-2 text-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {t('backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}