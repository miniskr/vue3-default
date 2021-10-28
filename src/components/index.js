import { contextMerge } from '@/utils';

const components = import.meta.globEager('./*/index.vue');
console.log('components', components);

export default contextMerge(components);
