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

        // Offcanvas kapandığında backdrop'u temizle
        const handleOffcanvasHidden = () => {
            // Tüm backdrop'ları temizle
            const backdrops = document.querySelectorAll('.offcanvas-backdrop');
            backdrops.forEach((backdrop) => {
                backdrop.remove();
            });
            
            // Body stillerini temizle
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };

        // Bootstrap offcanvas hide event listener
        const offcanvasElement = document.getElementById('offcanvasExample');
        if (offcanvasElement) {
            offcanvasElement.addEventListener('hidden.bs.offcanvas', handleOffcanvasHidden);
            offcanvasElement.addEventListener('hide.bs.offcanvas', handleOffcanvasHidden);
        }

        // Cleanup
        return () => {
            if (offcanvasElement) {
                offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleOffcanvasHidden);
                offcanvasElement.removeEventListener('hide.bs.offcanvas', handleOffcanvasHidden);
            }
        };
    }, []);

    return null;
}

