export const required = (field) => {
    const empty = '' || null;
    (field.querySelector('.form-control').value === empty) ? field.classList.add('error', 'shake'): field.classList.remove('error', 'shake');
};
