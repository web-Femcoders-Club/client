const getPageViewStats = (): Record<string, number> => {
    const pageViews = JSON.parse(localStorage.getItem('pageViews') || '{}');
    if (typeof pageViews === 'object' && pageViews !== null) {
        return pageViews;
    }
    return {};
};

export default getPageViewStats;


