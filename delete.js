
axios({
    method: 'DELETE',
    url:'http://localhost:3000/posts/4',
}).then(function(res) {

    const wrapper = document.querySelector('#wrapper');

    const newDiv = document.createElement("p");
    const newContent = document.createTextNode(JSON.stringify(res.data));
    newDiv.appendChild(newContent);
    wrapper.appendChild(newDiv);

});
