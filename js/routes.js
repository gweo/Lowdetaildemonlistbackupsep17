import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

// We fetch the object dynamically so a pathing or internal reference error won't crash the whole array
const PacksComponent = () => import('./pages/ListPacks.js').catch(err => console.error("Packs failed to load:", err));


export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
    { path: '/packs', component: PacksComponent },
];
