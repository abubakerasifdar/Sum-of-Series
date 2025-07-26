
         document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
         function myFunction() {
            let input = document.getElementById('input').value;
            let result = "";
            let sum = 0;
            let series = 0; 
            let totalseries = 0;
            for(let i = 0; i<=input; i++){
                series += +2;
                sum +=1/series;
                totalseries += sum;
                console.log(series, "series");
                console.log(sum, "sum");
                console.log(totalseries, 'Total');
            }
            
            result = 1 + totalseries;
            console.log(result, "Final Result.");
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
}   
   