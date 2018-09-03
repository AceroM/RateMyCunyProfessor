const fetchTeacherName = async (name) => {
    let parsedName = encodeURIComponent(name);
    const response = await fetch(`https://www.ratemyprofessors.com/search.jsp?query=${parsedName}`, {
        credentials: "same-origin",
        method: 'get'
    })
    var body = await response.text();
    return body;
}

export default fetchTeacherName