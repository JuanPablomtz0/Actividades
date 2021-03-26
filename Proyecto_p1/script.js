var table1;
var table2;
var table3;
var table4;
var table5;
var table6;

function timeDiff(a, b){
    var diff = a.getTime()- b.getTime();
    diff /= 1000;
    diff /= 60;
    return Math.abs(diff);
}
function timeFormat(a){
    var hour = a.getHours();
    var minutes = a.getMinutes();
    var format;
    (minutes>9) ? format =  `${hour}:${minutes}` : format = `${hour}:0${minutes}`;
    return format;
}

function update()
{
    var time = new Date();
    if(document.getElementById('pool1').src.match("pool_on")){
        total = (timeDiff(time, table1)*50/60).toFixed(2);
        document.getElementById('pool1total').innerHTML = `Total: $${total}`;
    }
    if(document.getElementById('pool2').src.match("pool_on")){
        total = (timeDiff(time, table2)*50/60).toFixed(2);
        document.getElementById('pool2total').innerHTML = `Total: $${total}`;
    }
    if(document.getElementById('pool3').src.match("pool_on")){
        total = (timeDiff(time, table3)*50/60).toFixed(2);
        document.getElementById('pool3total').innerHTML = `Total: $${total}`;
    }
    if(document.getElementById('pool4').src.match("pool_on")){
        total = (timeDiff(time, table4)*50/60).toFixed(2);
        document.getElementById('pool4total').innerHTML = `Total: $${total}`;
    }
    if(document.getElementById('pool5').src.match("pool_on")){
        total = (timeDiff(time, table5)*50/60).toFixed(2);
        document.getElementById('pool5total').innerHTML = `Total: $${total}`;
    }
    if(document.getElementById('pool6').src.match("pool_on")){
        total = (timeDiff(time, table6)*50/60).toFixed(2);
        document.getElementById('pool6total').innerHTML = `Total: $${total}`;
    }
}
setInterval(update, 1000);


const changeState = (tableNum) => 
{
    element=document.getElementById(tableNum)
    var time = new Date();
    if(element.src.match("pool_on"))
    {
        element.src="images/pool_off.png";
        var total;
        switch(tableNum){
            case 'pool1':
                total = (timeDiff(time, table1)*50/60).toFixed(2);
                document.getElementById('pool1inicio').innerHTML = `Hora de inicio: ${timeFormat(table1)}`;
                document.getElementById('pool1fin').innerHTML = `Hora de final: ${timeFormat(time)}`;
                document.getElementById('pool1total').innerHTML = `Total: $${total}`;
                break;
            case 'pool2':
                total = (timeDiff(time, table2)*50/60).toFixed(2);
                document.getElementById('pool2inicio').innerHTML = `Hora de inicio: ${timeFormat(table2)}`;
                document.getElementById('pool2fin').innerHTML = `Hora de final: ${timeFormat(time)}`;
                document.getElementById('pool2total').innerHTML = `Total: $${total}`;
                break;
            case 'pool3':
                total = (timeDiff(time, table3)*50/60).toFixed(2);
                document.getElementById('pool3inicio').innerHTML = `Hora de inicio: ${timeFormat(table3)}`;
                document.getElementById('pool3fin').innerHTML = `Hora de final: ${timeFormat(time)}`;
                document.getElementById('pool3total').innerHTML = `Total: $${total}`;
                break;
            case 'pool4':
                total = (timeDiff(time, table4)*50/60).toFixed(2);
                document.getElementById('pool4inicio').innerHTML = `Hora de inicio: ${timeFormat(table4)}`;
                document.getElementById('pool4fin').innerHTML = `Hora de final: ${timeFormat(time)}`;
                document.getElementById('pool4total').innerHTML = `Total: $${total}`;
                break;
            case 'pool5':
                total = (timeDiff(time, table5)*50/60).toFixed(2);
                document.getElementById('pool5inicio').innerHTML = `Hora de inicio: ${timeFormat(table5)}`;
                document.getElementById('pool5fin').innerHTML = `Hora de final: ${timeFormat(time)}`;
                document.getElementById('pool5total').innerHTML = `Total: $${total}`;
                break;
            case 'pool6':
                total = (timeDiff(time, table6)*50/60).toFixed(2);
                document.getElementById('pool6inicio').innerHTML = `Hora de inicio: ${timeFormat(table6)}`;
                document.getElementById('pool6fin').innerHTML = `Hora de final: ${timeFormat(time)}`;
                document.getElementById('pool6total').innerHTML = `Total: $${total}`;
                break;
        }
    }
    else
    {
        element.src="images/pool_on.png";
        switch(tableNum){
            case 'pool1':
                table1 = time;
                document.getElementById('pool1inicio').innerHTML = `Hora de inicio: ${timeFormat(table1)}`;
                document.getElementById('pool1fin').innerHTML = "Hora de final:";
                document.getElementById('pool1total').innerHTML = "Total: $0.00";
                break;
            case 'pool2':
                table2 = time;
                document.getElementById('pool2inicio').innerHTML = `Hora de inicio: ${timeFormat(table2)}`;
                document.getElementById('pool2fin').innerHTML = "Hora de final:";
                document.getElementById('pool2total').innerHTML = "Total: $0.00";
                break;
            case 'pool3':
                table3 = time;
                document.getElementById('pool3inicio').innerHTML = `Hora de inicio: ${timeFormat(table3)}`;
                document.getElementById('pool3fin').innerHTML = "Hora de final:";
                document.getElementById('pool3total').innerHTML = "Total: $0.00";
                break;
            case 'pool4':
                table4 = time;
                document.getElementById('pool4inicio').innerHTML = `Hora de inicio: ${timeFormat(table4)}`;
                document.getElementById('pool4fin').innerHTML = "Hora de final:";
                document.getElementById('pool4total').innerHTML = "Total: $0.00";
                break;
            case 'pool5':
                table5 = time;
                document.getElementById('pool5inicio').innerHTML = `Hora de inicio: ${timeFormat(table5)}`;
                document.getElementById('pool5fin').innerHTML = "Hora de final:";
                document.getElementById('pool5total').innerHTML = "Total: $0.00";
                break;
            case 'pool6':
                table6 = time;
                document.getElementById('pool6inicio').innerHTML = `Hora de inicio: ${timeFormat(table6)}`;
                document.getElementById('pool6fin').innerHTML = "Hora de final:";
                document.getElementById('pool6total').innerHTML = "Total: $0.00";
                break;
        }
    }
}

