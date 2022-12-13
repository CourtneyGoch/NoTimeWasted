
//calls the function
$(function () {
  //displays date
  setInterval(function (){
  var now=dayjs();
   displayTimeEl = $("#currentDay");
  displayTimeEl.text(now.format("ddd-MMMM-YYYY-HH-mm-ss"));
  }, 1000);

  //start and end times
  const start = 00;
  const end = 24;
 

  //calls timeDate
timeDate()
  function timeDate() {
    //function for the time date 
   for (i= 0; i<24; i++){
    var parentId = "hour-" + i;
    var textarea = localStorage.getItem(parentId)
    //This saves the items to the parent item and displays the text
    $("#" + parentId).children("textarea").val(textarea)
    if (dayjs().hour()===i){
      $("#" + parentId).children("textarea").addClass("present")
      //this displays the colors per time (present, future, past)
    } else if (dayjs().hour() <i){
      $("#" + parentId).children("textarea").addClass("future")
    } else {
      $("#" + parentId).children("textarea").addClass("past")
    }
   }
    //Button for times
    timeSlotContainer = $(".saveBtn")
    //Click event on button 
    timeSlotContainer.on("click", function(event){
      //Adding to local storage 
      var textArea = $(this).siblings("textarea").val();
      var parentId = $(this).parent("div").attr("id")
      localStorage.setItem(parentId, textArea)


    })
  }
  
});











