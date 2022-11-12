var n = Number(prompt("Enter the number of processes: "));
var at = [], bt = [], t = 0;
var remain = n, curr, sumWT = 0, sumTAT = 0, print = "Process&emsp;ArrivalTime&emsp;BurstTime<br><br>";
for( var i=0 ; i<n ; i++)  {
    var a = Number(prompt("Enter arrival time for process P" + (i+1) +": "));
    var b = Number(prompt("Enter burst time for process P" + (i+1) +": "));
    at.push(a);
    bt.push(b);
    print += "P" + (i+1) + "&emsp;&emsp;&emsp;&emsp;&emsp;" + a + "&emsp;&emsp;&emsp;&emsp;&emsp;" + b + "<br><br>"; 
}
document.getElementById("status").style = "color: green";
document.getElementById("status").innerHTML = "Thank you for your input";
document.getElementById("intxt").innerHTML = "INPUT";
document.getElementById("input").innerHTML = print;
document.getElementById("outtxt").innerHTML = "OUTPUT";
print = "Process&emsp;WaitingTime&emsp;TurnaroundTime<br><br>";
while(remain != 0){
  for(var i=0 ; i<n ; i++){
      if(at[i] <= t ){
          curr = i;
          break;
      }
  }
  var temp1 = t - at[curr];
  t += bt[curr];
  var temp2 = t - at[curr];
  sumWT += temp1;
  sumTAT += temp2;
  print += "P" + (curr+1) + "&emsp;&emsp;&emsp;&emsp;&emsp;" + temp1 + "&emsp;&emsp;&emsp;&emsp;&emsp;" + temp2 + "<br><br>"; 
  at[curr] = 1000;
  remain --;
}
document.getElementById("output").innerHTML = print;
console.log("Average Waiting Time: " + sumWT / n);
console.log("Average Turnaround Time: " + sumTAT / n);