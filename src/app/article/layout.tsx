import React from 'react';
import StoreProvider from './storeProvider';

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    );
}
