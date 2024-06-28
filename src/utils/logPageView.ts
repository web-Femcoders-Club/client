const logPageView = (page: string) => {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        const pageViews = JSON.parse(localStorage.getItem('pageViews') || '{}');
        if (pageViews[page]) {
            pageViews[page] += 1;
        } else {
            pageViews[page] = 1;
        }
        localStorage.setItem('pageViews', JSON.stringify(pageViews));
    }
};

export default logPageView;

