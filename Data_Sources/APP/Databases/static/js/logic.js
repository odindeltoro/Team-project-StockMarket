function goGetResults() {
    let buscar_tipo = d3.select("#buscarTipo").property("value")
    d3.json(`/api/consultar/${buscar_tipo}`).then(json => {
    console.log(json)
    console.log(buscar_tipo)
    });
}
function financials(){
    let financials = d3.select("#financials").property("value")
    d3.json(`/api/consulta/${financials}`).then(json => {
    console.log(json)
    console.log(financials)
    });
}
function Historical(){
    let Historical = d3.select("#Historical").property("value")
    d3.json(`/api/consult/${Historical}`).then(json => {
    console.log(json)
    console.log(Historical)
    });
}
d3.select("#buscarTipo").on("change", goGetResults);
d3.select("#financials").on("change", financials);
d3.select("#Historical").on("change", Historical);