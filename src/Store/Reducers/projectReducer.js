const initState = {
    projects: [
        {id: '1', title: 'title 1', content: 'This is some content. I was too lazy to write anything beyond the next sentance. This is the next sentance.'},
        {id: '2', title: 'title 2', content: 'This is some content. I was too lazy to write anything beyond the next sentance. This is the next sentance.'},
        {id: '3', title: 'title 3', content: 'This is some content. I was too lazy to write anything beyond the next sentance. This is the next sentance.'},
    ]
};
const projectReducer = (state = initState, action) => {
    return state;
};
export default projectReducer;