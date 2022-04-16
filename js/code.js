let output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i >= 0; i--) {
    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = `Countdown: ${i}`
        output.appendChild(para)
    } else if (i === 0) {
        para.textContent = `Blast off!`
        output.appendChild(para)
    } else {
        para.textContent = i
        output.appendChild(para)
    }
}



// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
