// Exporting all routes inside of pages to its own index.js file so as to be able to access everysingle one of them from just the pages
// Apparently, the index.js file availale inthe pages folder gives the pages folder the ability of holding every of its child route

export { MovieDetail } from './MovieDetail.js';
export { MovieList } from './MovieList.js';
export { Search } from './Search.js';

export { PageNotFound } from './PageNotFound.js';
