export const ProjetoAPI = {
    api: 'https://6330ad26cff0e7bf70e0551e.mockapi.io/projeto/',
    buscar(setDados){
        fetch(this.api)
        .then(res => res.json())
        .then(data => setDados(data))
        .catch(erro => console.log(erro))
    },
    deletar(id, Alert, cb){
        fetch(`${this.api}${id}`,{
        method: 'DELETE'
        }).then( () => {
            Alert.alert('','Projeto deletado com sucesso')
            cb()
        }).catch( res => { Alert.alert('','Não foi possível deletar o projeto')})
    }
}