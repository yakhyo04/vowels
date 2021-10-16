form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let inputValue = input.value.trim();

    const vowels = /['a', 'e', 'i', 'o', 'u']/gi;
    const found = inputValue.match(vowels).length

    input.value = '';

    text.textContent = found;
})