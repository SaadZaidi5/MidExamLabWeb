const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        if(toggle.parentNode.classList.contains('active')){
            toggle.parentNode.classList.toggle('show')
        } else
        {
            toggle.parentNode.classList.toggle('active')
        }
        
    })
})

const btn = document.getElementById("Button");
btn.addEventListener('click', function() {
    const parent = document.getElementById("Last");
    parent.classList.add('faq');
    btn.classList.add("faq-toggle");
    
    const x = document.createElement("h3");
    const y = document.createElement("p");
    x.innerHTML = document.getElementById("Question").value;
    y.innerHTML = document.getElementById("Answer").value;
    parent.appendChild(x);
    parent.appendChild(y);
    })