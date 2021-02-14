function gaa() {
  gggg=$.ajax({url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTiBcPcMgUR06hv74It1OtUtCkqVmdG5_pVsZ4kY9NbOhyPX8GbHy8EYq4980GgVCiOd_32Fa22lvUw/pub?gid=1098808332&single=true&output=csv",async:false});
  
    
    $('#myDiv').html('')
    for (var i=1; i<gggg.responseText.split(/\n/).length; i++){
$('#myDiv').prepend('<div class="card"><div class="content"><h4>' + gggg.responseText.split(/\n/)[i].split(',')[1] + '(' + gggg.responseText.split(/\n/)[i].split(',')[0] + ')</h4><div class="description">' + gggg.responseText.split(/\n/)[i].split(',')[2] + '</div></div></div>');
}
  }

function sub() {
 $.ajax({url:"https://docs.google.com/forms/d/e/1FAIpQLSdNhTBmrWtG4BHn8lQyfRfYMriBu6KQNsErbUc2SE59UEfzag/formResponse?usp=pp_url&entry.726629075=" + document.querySelector('#name').value + "&entry.2040952284=" + document.querySelector('#text').value,async:false});
   gaa();
 } 

gaa()