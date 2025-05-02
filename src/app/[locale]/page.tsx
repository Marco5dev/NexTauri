'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          {isLoading ? (
            <div className="text-sm">Loading...</div>
          ) : session ? (
            <div className="flex items-center gap-2">
              <span className="text-sm">
                {session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
              >
                {t('signOut')}
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              {t('signIn')}
            </button>
          )}
        </div>
      </div>
      
      <div className="mt-6">
        <Link href="/about" className="underline">
          {t('about')}
        </Link>
      </div>

      {session && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h2 className="font-bold mb-2">{t('userInfo')}</h2>
          <pre className="whitespace-pre-wrap overflow-auto p-2 bg-white dark:bg-gray-900 rounded text-sm">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}