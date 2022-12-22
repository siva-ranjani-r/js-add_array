/*var salary = [9000,5234,14456,6576,9876];
var total = salary.reduce(function(previousVal,currentVal)
{
	return previousVal+currentVal;
	
})
document.write(total+"<br>")*/

var arr=[4,8,7,13,24,56];
var sum=0;
for(i=0;i<arr.length;i++)
{
	sum+=arr[i];
}
document.write("sum is:"+sum);