$(()=>{

    $('body').css({'overflow-x':'auto'})
    $('#navbarTogglerDemo02>ul').html('');
    let curloc = window.location.pathname;
    problems.forEach(el=>{
        $('#navbarTogglerDemo02>ul').append(`<li class="nav-item ${curloc.includes(el.filename) ? 'active' : ''}">
        <a class="nav-link" href="/leetcode/${el.filename}">${el.q}</a>
        <span class="sr-only">${el.keywords}</span>
      </li>`)
    })
})