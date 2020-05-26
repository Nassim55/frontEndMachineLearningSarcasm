const onMouseEnterSearchForm = () => {
    document.querySelector('.search-form').style.boxShadow = '0.5rem 0.5rem 5rem rgba(0, 0, 0, 0.30)';
};

const onMouseLeaveSearchForm = () => {
    document.querySelector('.search-form').style.boxShadow = '0.3rem 0.3rem 1.2rem rgba(0, 0, 0, 0.2)';
};

const onFocusSearchForm = () => {
    document.querySelector('.search-input').placeholder = '';
    document.querySelector('.search-form').style.border = 'solid rgba(0, 0, 0, 0.20)';
};

const onBlurSearchForm = () => {
    document.querySelector('.search-input').placeholder = 'Type your sentence here...';
    document.querySelector('.search-form').style.border = 'none';
};

export { 
    onMouseEnterSearchForm,
    onMouseLeaveSearchForm,
    onFocusSearchForm,
    onBlurSearchForm
}