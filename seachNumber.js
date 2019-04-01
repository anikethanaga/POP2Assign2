function searchNumber(){
    var i;
    var n = prompt('Enter the count of numbers in the list:');
    console.log(n)
    document.getElementById("count").innerHTML = "Number of elements in the list: " + n;
    var numbers = []
    var number;
    var st = "";
    for(i=0;i<n;i++){
        number = parseInt(prompt('Enter the number to be inserted in the list: (' + parseInt(n-i) + ' more left)'));
        numbers.push(number);
        st += number + " ";
        document.getElementById("numbers").innerHTML = "The numbers in the list are: " + st;
    }
    console.log(numbers);
    var toSearch = prompt('Enter the  number to search for in the list:');
    document.getElementById("search").innerHTML = "The number to search in the list is: " + toSearch;
    for (i=0;i<numbers.length;i++){
        if (toSearch==numbers[i]){
        document.getElementById("result").innerHTML = "The number " + toSearch + ' is present in the entered list.';
        return;
        }    
    }
    document.getElementById("result").innerHTML = "The number " + toSearch + ' is not present in the entered list.';
}