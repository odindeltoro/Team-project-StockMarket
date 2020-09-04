// data.forEach(d=>{
//     let row = tbody.append("tr")
//     Object.values(d).forEach(w=>{
//         row.append("td").text(w)
//     })
// })


// function goGetResults() {
//   let buscar_tipo = d3.select("#buscarTipo").property("value")
//   d3.json(`/api/consultar/${buscar_tipo}`).then(json => {

//       console.log(json)
//       console.log(buscar_tipo)
//       let table = d3.select("#quotes")

//       let content = Object.values(json[0])

//       let row = table.append("tr")
//       content.forEach(d => {
//           row.append("td").text(d).attr("class", "clear")
//       })


//   });
// }
// function financials() {
//   let financials = d3.select("#financials").property("value")
//   d3.json(`/api/consulta/${financials}`).then(json => {
//       console.log(json[0])
//       console.log(financials)
//       let table = d3.select("#financial")

//       let content = Object.values(json[0])
//       console.log(content)
//       console.log(Object.keys(json[0]))

//       let row = table.append("tr")
//       content.forEach(d => {
//           row.append("td").text(d).attr("class", "clear1")

//       })
//   });
// }
// function Historical() {
//   let Historical = d3.select("#Historical").property("value")
//   d3.json(`/api/consult/${Historical}`).then(json => {
//       // console.log("json",json)
//       // console.log("eleccion",Historical)
//       let table = d3.select("#hist")

//       let content = Object.values(json)
//       console.log("values", content.date2)
//       console.log("woObject", json)
//       console.log("keys", Object.keys(json))
//       console.log("values", Object.values(json))

//       content.forEach(d => {
//           console.log("Esto es d:", d)
//           let row = table.append("tr")
//           row.append("td").text(d).attr("class", "clear2")

//       })
//       // let date
//       // date.forEach(d => {
//       //     let row = table.append("tr")
//       //     console.log(d)
//       //     row.append("td").text(d).attr("class","clear2")

//       // })
//   });
// }
// function clear() {
//   d3.selectAll(".clear").remove()
// }
// function clear1() {
//   d3.selectAll(".clear1").remove()
// }
// function clear2() {
//   d3.selectAll(".clear2").remove()
// }
function graph() {
  let industry = d3.select("#industry").property("value")
  d3.json(`/api/graph/${industry}`).then(data => {
      if (industry == 'sector') {
          d3.select("#modify")
              .append("canvas")
              .attr("id", "polar-chart")
              .attr("width","1400")
              .attr("height","800");
          console.log(data)
          let label = "Company by Sector"
        //   let labels = Object.values(data.sector)
        //   let dat = Object.values(data.count)
          new Chart(document.getElementById("polar-chart"), {
              type: 'polarArea',
              data: {
                  labels: Object.values(data.sector),
                  datasets: [
                      {
                          label: label,
                          backgroundColor: ["#411f1f", "#86c4ba", "#4b5d67",
                              "#59405c", "#87556f", "#4f8a8b", "#fbd46d", "#f09ae9", "#d3de32", "#ffe78f",
                              "#ffd36b", "#535204", "#523906", "#848ccf", "#93b5e1", "#ffe4e4", "#be5683",
                              "#206a5d", "#1f4068", "#eebb4d", "#6f4a8e", "#221f3b",
                              "#ffdbc5", "#cf1b1b", "#006a71", "#ffffdd", "#cbeaed", "#d3de32",
                              "#394989", "#4ea0ae", "#fff48f", "#1b262c", "#0f4c75", "#3282b8", "#bbe1fa", "#ffe0f7",
                              "#fe91ca", "#ede682", "#e84a5f", "#f6ab6c"],
                          data: Object.values(data.count)
                      },
                  ],
              },
              options: {
                  title: {
                      display: true,
                      text: 'Company by Sector'
                  },
                  animation: {
                    animateRotate: true,
                    animateScale: true
              },
          }});
      } else {
          d3.select("#modify")
              .append("canvas")
              .attr("id", "polar-chart")
              .attr("width","1400")
              .attr("height","800");
          console.log(data)
          let label = "Company by Industry"
        //   let labels = Object.values(data.industry)
        //   let dat = Object.values(data.count)
          new Chart(document.getElementById("polar-chart"), {
              type: 'polarArea',
              data: {
                  labels: Object.values(data.industry),
                  datasets: [
                      {
                          label: label,
                          backgroundColor: ["#411f1f", "#86c4ba", "#4b5d67",
                              "#59405c", "#87556f", "#4f8a8b", "#fbd46d", "#f09ae9", "#d3de32", "#ffe78f",
                              "#ffd36b", "#535204", "#523906", "#848ccf", "#93b5e1", "#ffe4e4", "#be5683",
                              "#206a5d", "#1f4068", "#eebb4d", "#6f4a8e", "#221f3b",
                              "#ffdbc5", "#cf1b1b", "#006a71", "#ffffdd", "#cbeaed", "#d3de32",
                              "#394989", "#4ea0ae", "#fff48f", "#1b262c", "#0f4c75", "#3282b8", "#bbe1fa", "#ffe0f7",
                              "#fe91ca", "#ede682", "#e84a5f", "#f6ab6c"],
                          data: Object.values(data.count)
                      }
                  ]
              },
              options: {
                  title: {
                      display: true,
                      text: 'Company by Sector'
                  }
              }
          });

      }

  });
}
function delet() {
  d3.select("#polar-chart").remove()
  graph()

}
// d3.select("#buscarTipo").on("change", goGetResults);
// d3.select("#financials").on("change", financials);
// d3.select("#Historical").on("change", Historical);
// d3.select(".erase").on("click", clear)
// d3.select(".erase1").on("click", clear1)
// d3.select(".erase2").on("click", clear2)
graph()
d3.select("#industry").on("change", delet)