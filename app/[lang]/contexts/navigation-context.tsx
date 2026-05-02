'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { usePathname, useParams } from 'next/navigation';
import { itemData as productItems } from '@/app/[lang]/products/products-list';
import { itemData as companyItems } from '@/app/[lang]/companies/companies-list';
import { itemData as serviceItems } from '@/app/[lang]/services/services-list';
import { itemData as appItems } from '@/app/[lang]/apps/applications-list';

type Dictionary = Record<string, string>;

export type ListItem = { title: string; slug: string };

type NavigationContextValue = {
  currentProduct: ListItem | undefined;
  currentCompany: ListItem | undefined;
  currentService: ListItem | undefined;
  currentApp: ListItem | undefined;
  localize: (href: string) => string;
  dict: Dictionary;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({
  children,
  dict,
}: {
  children: ReactNode;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const { lang } = useParams() as { lang: string };

  const getLocalizedHref = (href: string): string => {
    if (href === '/') return `/${lang}`;
    if (!href.startsWith('/')) href = '/' + href;
    if (href.startsWith(`/${lang}/`)) return href;
    return `/${lang}${href}`;
  };

  const currentProduct = useMemo(() => {
    if (!pathname.includes('/products/')) return undefined;
    const itemSlug = pathname.split('/products/')[1];
    return productItems.find((item) => item.slug === itemSlug);
  }, [pathname]);

  const currentCompany = useMemo(() => {
    if (!pathname.includes('/companies/')) return undefined;
    const itemSlug = pathname.split('/companies/')[1];
    return companyItems.find((item) => item.slug === itemSlug);
  }, [pathname]);

  const currentService = useMemo(() => {
    if (!pathname.includes('/services/')) return undefined;
    const itemSlug = pathname.split('/services/')[1];
    return serviceItems.find((item) => item.slug === itemSlug);
  }, [pathname]);

  const currentApp = useMemo(() => {
    if (!pathname.includes('/apps/')) return undefined;
    const itemSlug = pathname.split('/apps/')[1];
    return appItems.find((item) => item.slug === itemSlug);
  }, [pathname]);

  const value: NavigationContextValue = {
    currentProduct,
    currentCompany,
    currentService,
    currentApp,
    localize: getLocalizedHref,
    dict,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};