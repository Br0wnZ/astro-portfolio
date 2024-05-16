export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_C8TK-Tib.mjs').then(n => n.g);

export { page };
