state = {
    search: '',
    results: '',
    drinkInfo: ''
}

onChange = (e) => {
    this.setState({ search: e.target.value });
}

onSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.search}`)
        .then(res => this.setState({ results: res.data.drinks }))
        .catch(err => console.log(err));

}

onClick = (e) => {
    e.preventDefault();
    console.log('click')
    this.setState({ search: '', results: '' })
}

random = (e) => {
    e.preventDefault();

    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => this.setState({ results: res.data.drinks[0] }))
        .catch(err => console.log(err))
        
}