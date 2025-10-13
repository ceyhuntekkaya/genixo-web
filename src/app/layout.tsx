import type { Metadata } from 'next';

import '@/app/assets/css/plugins/bootstrap.min.css';
import '@/app/assets/css/plugins/all.min.css';
import '@/app/assets/css/plugins/magnific-popup.css';

import '@/app/globals.css';

export const metadata: Metadata = {
    title: 'Genixo Bilişim ve Teknoloji',
    description: 'Genixo Bilişim ve Teknoloji',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
        <body>{children}</body>
        </html>
    );
}