// Global App Controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import {
    elements
} from './views/base';

const state = {};

/* 
 * SEARCH CONTROLLER
 */

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();

    // 2. New search of object and add to state
    state.search = new Search(query);

    // 3. Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();

    try {
        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        searchView.renderResults(state.search.results);

    } catch (err) {
        alert('Something went wrong with the search...');
    }
}

// Pagination
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.results, goToPage);
    }
});