'use client';

import { useEffect } from 'react';

interface BootstrapWindow extends Window {
    bootstrap?: {
        Offcanvas: new (element: HTMLElement) => {
            show: () => void;
            hide: () => void;
        };
    };
}

export default function BootstrapScript() {
    useEffect(() => {
        // Bootstrap'i npm paketinden dinamik olarak yükle
        const loadBootstrap = async () => {
            if (typeof window !== 'undefined') {
                const win = window as BootstrapWindow;
                if (!win.bootstrap) {
                    try {
                        // @ts-expect-error - Bootstrap type definitions yok
                        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
                        // Bootstrap'i global olarak erişilebilir hale getir
                        win.bootstrap = bootstrap.default || bootstrap;
                    } catch (error) {
                        console.error('Bootstrap yüklenirken hata:', error);
                    }
                }
            }
        };

        loadBootstrap();
    }, []);

    return null;
}

