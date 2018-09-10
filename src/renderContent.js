const renderContent = (content, type) => {
    if (type == 'rating') {
        const rate = document.createElement('a');
    }
    const li = document.createElement('li')
    li.className = "ratings";
    li.innerHTML = `
        <li> </li>
    `
    return li
}

export default renderContent;