'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';

export default function SignIn() {
  const t = useTranslations('Auth');
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('email', {
        email,
        callbackUrl,
        redirect: false,
      });

      if (result?.error) {
        setError(t('error'));
      }
    } catch (err) {
      setError(t('error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{t('signIn')}</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-2 text-white bg-blue-600 hover:bg-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isLoading ? t('loading') : t('signInWithEmail')}
          </button>
        </form>
        
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
          <span className="px-3 text-sm text-gray-500 dark:text-gray-400">{t('or')}</span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
        </div>
        
        <div className="grid gap-3">
          <button
            onClick={() => signIn('google', { callbackUrl })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <span>{t('signInWithGoogle')}</span>
          </button>
          
          <button
            onClick={() => signIn('facebook', { callbackUrl })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <span>{t('signInWithFacebook')}</span>
          </button>
          
          <button
            onClick={() => signIn('github', { callbackUrl })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <span>{t('signInWithGithub')}</span>
          </button>
          
          <button
            onClick={() => signIn('discord', { callbackUrl })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <span>{t('signInWithDiscord')}</span>
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            {t('backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}