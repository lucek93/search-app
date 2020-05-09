import {
    elements
} from './base'

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = "";
}

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

export const renderResults = (content, page = 1, resPerPage = 10) => {
    // Render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    content.slice(start, end).forEach(el => {
        renderContent(el);
    });

    // Render pagination buttons
    renderButtons(page, content.length, resPerPage);
}

const renderContent = (content) => {
    const markup = `
    <li>
        <a class="results__link" href=${content.trackViewUrl} target="_blank">
            <figure class="results__fig">
                <img src="${content.artworkUrl100}" alt="${content.artistName}">
            </figure>
            <div class="results__data">
                <h4 class="results__song">${content.trackName}</h4>
                <p class="results__author">${content.artistName}</p>

                <video class="results__video" name="media" controls>
                    <source src=${content.previewUrl} type="audio/x-m4a">
                </video>
            </div>
        </a>
    </li>
    `;

    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}


const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;

    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next')
    } else if (page < pages) {
        // Both buttons
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // Only button to go to prev page
        button = createButton(page, 'prev')
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};



// type: prev or next
/* const createButton = (page, type) => `
<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
    </svg>
    
</button>
`;
 */

const createButton = (page, type) => {
    if (type === 'prev') {
        return `
        <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
           
            
        </button>
        `;
    } else {
        return `
        <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
            
        </button>
        `;
    }
};