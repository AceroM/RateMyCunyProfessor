const renderContent = (num) => {
    const li = document.createElement('li')
    li.className = "ratings";
    li.innerHTML = `
        <li> ${num} </li>
    `
    return li
}

export default renderContent;