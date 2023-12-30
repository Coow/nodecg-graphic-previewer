import React from 'react';
import { createRoot } from 'react-dom/client';
import { Preview } from './Preview';

const root = createRoot(document.getElementById('root')!);
root.render(<Preview />);
