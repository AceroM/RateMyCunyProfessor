import fetchTeacherName from './fetchTeacherName';

const fetchTeacherData = async (body) => {
    //add school detection
    var idRegex = /(?<=ShowRatings.jsp\?tid=)(.*)(?=")/;
    var id = body.match(idRegex);
    var invalid = false
    id == null ? invalid = true : id = id[0];
    if (invalid) return false;
    var url = `https://www.ratemyprofessors.com/paginate/professors/ratings?tid=${id}`
    let resp = await fetch(url, {
        credentials: "same-origin",
        method: 'get',
        }
    )
    let data = await resp.json();
    if (data == undefined) return '';
    // let parsed = JSON.parse(data);
    let ratings = data.ratings;
    if (ratings.length == 0) return false
    // let rating = ratings[0].rOverallString;
    let averageRating = 0;
    let counter = 0;
    ratings.forEach((comment) => {
        averageRating += comment.rOverall;
    })
    averageRating = Math.round(100 * (averageRating / ratings.length)) / 100;
    var buttonLink = `https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${id}`;
    return [averageRating.toString(), buttonLink];
} 

export default fetchTeacherData;