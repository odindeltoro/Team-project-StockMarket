function graph() {
  let industry = d3.select("#industry").property("value");
  d3.json(`/api/graph/${industry}`).then((data) => {
    if (industry == "sector") {
      d3.select("#modify")
        .append("canvas")
        .attr("id", "polar-chart")
        .attr("width", "1400")
        .attr("height", "800");
      console.log(data);
      let label = "Company by Sector";
    //   let labels = Object.values(data.sector);
    //   let dat = Object.values(data.count);
      new Chart(document.getElementById("polar-chart"), {
        type: "polarArea",
        data: {
          labels: Object.values(data.sector),
          datasets: [
            {
              label: label,
              backgroundColor: [
                "#411f1f",
                "#86c4ba",
                "#4b5d67",
                "#59405c",
                "#87556f",
                "#4f8a8b",
                "#fbd46d",
                "#f09ae9",
                "#d3de32",
                "#ffe78f",
                "#ffd36b",
                "#535204",
                "#523906",
                "#848ccf",
                "#93b5e1",
                "#ffe4e4",
                "#be5683",
                "#206a5d",
                "#1f4068",
                "#eebb4d",
                "#6f4a8e",
                "#221f3b",
                "#ffdbc5",
                "#cf1b1b",
                "#006a71",
                "#ffffdd",
                "#cbeaed",
                "#d3de32",
                "#394989",
                "#4ea0ae",
                "#fff48f",
                "#1b262c",
                "#0f4c75",
                "#3282b8",
                "#bbe1fa",
                "#ffe0f7",
                "#fe91ca",
                "#ede682",
                "#e84a5f",
                "#f6ab6c",
              ],
              data: Object.values(data.count),
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Company by Sector",
          },
        animation: {
          animateRotate: true,
          animateScale: true
        },
      });
    } else {
      d3.select("#modify")
        .append("canvas")
        .attr("id", "polar-chart")
        .attr("width", "1400")
        .attr("height", "800");
      console.log(data);
      let label = "Industry";
    //   let labels = Object.values(data.industry);
    //   let dat = Object.values(data.count);
      new Chart(document.getElementById("polar-chart"), {
        type: "horizontalBar",
        data: {
          labels: Object.values(data.industry),
          datasets: [
            {
              label: label,
              backgroundColor: [
                "#411f1f",
                "#86c4ba",
                "#4b5d67",
                "#59405c",
                "#87556f",
                "#4f8a8b",
                "#fbd46d",
                "#f09ae9",
                "#d3de32",
                "#ffe78f",
                "#ffd36b",
                "#535204",
                "#523906",
                "#848ccf",
                "#93b5e1",
                "#ffe4e4",
                "#be5683",
                "#206a5d",
                "#1f4068",
                "#eebb4d",
                "#6f4a8e",
                "#221f3b",
                "#ffdbc5",
                "#cf1b1b",
                "#006a71",
                "#ffffdd",
                "#cbeaed",
                "#d3de32",
                "#394989",
                "#4ea0ae",
                "#fff48f",
                "#1b262c",
                "#0f4c75",
                "#3282b8",
                "#bbe1fa",
                "#ffe0f7",
                "#fe91ca",
                "#ede682",
                "#e84a5f",
                "#f6ab6c",
              ],
              data: Object.values(data.count),
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Company by Industry",
          },
        },
      });
    }
  });
}
function delet() {
  d3.select("#polar-chart").remove();
  graph();
}
graph();
d3.select("#industry").on("change", delet);
