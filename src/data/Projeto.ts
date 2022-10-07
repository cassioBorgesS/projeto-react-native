export  function buscar(setDados){
    return (
        new Promise(
            resolve =>
            fetch('https://6330ad26cff0e7bf70e0551e.mockapi.io/projeto')
            .then(res => res.json())
            .then(data => setDados(data))
            .catch(() => setDados([]))
        ) 
    )
}