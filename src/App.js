
import './App.css';
import o from './o.png' ;
import x from './x.png' ;

let winner=0;
let a=1;
let s=1;
let player1,player2;
let a1,a2,a3,a4,a5,a6,a7,a8,a9;



function App() {
  return (
      <>
        <div className="container">
          <h1 id="heading">Tic Tac Toe</h1>
          <div className=" row " id={"a1"} >
            <div className="col-lg-4 col-sm-12 mt-1" >
              <label> player 1 (o) Name </label>
              <input id="p1_value"  />
            </div>
            <div className="col-lg-4 col-sm-12 mt-1" >
              <label> player 2 (x) Name </label>
              <input id="p2_value" />
            </div >
            <div className="col-lg-4 col-sm-8 mt-1"  >
              <button type={"button"} className="btn btn-primary " onClickCapture={read}>submit</button>
            </div>
          </div>
          <div id="turn">
            <div className="row "  >
              <div className="col">
                <h1 id="p1"> player 1(0): </h1>
                <button id="bt1" type="button" className="btn btn-primary">Turn</button></div>
              <div className="col">
                <h1 id="p2" > player 2(x): </h1>
                <button id ="bt2" type="button" className="btn btn-primary">Turn</button></div>
            </div>
          </div>
          <div className="result">
            <h1 id ="result"> </h1>
          </div>
          <div className="box" id={"a2"}>
            <div className="row">
              <div className="c col-3" id={"b1"} onClick={play}>

              </div>
              <div className="c col-3" id={"b2"} onClick={play}>

              </div>
              <div className="c col-3" id={"b3"} onClick={play}>

              </div>
            </div>
            <div className="row">
              <div className="c col-3" id={"b4"} onClick={play}>

              </div>
              <div className="c col-3" id={"b5"} onClick={play}>

              </div>
              <div className="c col-3" id={"b6"} onClick={play}>

              </div>
            </div>

            <div className="row">
              <div className="c col-3" id={"b7"} onClick={play}>

              </div>
              <div className="c col-3" id={"b8"} onClick={play}>

              </div>
              <div className="c col-3" id={"b9"} onClick={play}>

              </div>
            </div>

          </div>

        </div>


      </>
  );
}


function read() {
  document.getElementById("p1").innerText+=document.getElementById("p1_value").value;
  document.getElementById("p2").innerText+=document.getElementById("p2_value").value;
  document.getElementById("a1").style.display="none";
  document.getElementById("a2").style.display="block";
  document.getElementById("p1").style.display="inline-block";
  document.getElementById("p2").style.display="inline-block";
  document.getElementById("bt1").style.display="inline-block";
  player1 = document.getElementById("p1_value").value;
  player2 = document.getElementById("p2_value").value;
  a1=document.getElementById("b1");
  a2=document.getElementById("b2");
  a3=document.getElementById("b3");
  a4=document.getElementById("b4");
  a5=document.getElementById("b5");
  a6=document.getElementById("b6");
  a7=document.getElementById("b7");
  a8=document.getElementById("b8");
  a9=document.getElementById("b9");

}
function play(target){
  if(s===1) {
    if (a % 2 === 0) {
      if (target.currentTarget.innerHTML === "") {
        document.getElementById("bt1").style.display="inline-block";
        document.getElementById("bt2").style.display="none";
        console.log("h1" + target.currentTarget.innerHTML);
        const elem = document.createElement("img");
        elem.setAttribute("src", x);
        target.currentTarget.appendChild(elem);

        a++;
      }
    } else {

      if (target.currentTarget.innerHTML === "") {
        document.getElementById("bt2").style.display="inline-block";
        document.getElementById("bt1").style.display="none";
        console.log("h2" + target.currentTarget.innerHTML);
        const elem1 = document.createElement("img");
        elem1.setAttribute("src", o);
        target.currentTarget.appendChild(elem1);
        a++;
      }
    }
    console.log("bj");
    win_check();
  }

}
function win_check(){

  console.log("checking 1"+ a1);

  if( a1.innerHTML!="" & a2.innerHTML!=="" & a3.innerHTML!=""){
    console.log("checking a1");
    if( a1.firstElementChild.src === a2.firstElementChild.src & a3.firstElementChild.src === a2.firstElementChild.src) {
      console.log("1");
      if (a1.firstElementChild.src === o) {
        winner = 1;
      }
      if (a1.firstElementChild.src === x) {
        winner = 2;
      }}

  }
  if( a4.innerHTML!="" & a5.innerHTML!="" & a6.innerHTML!=""){
    console.log("checking a2");
    if( a4.firstElementChild.src === a5.firstElementChild.src & a5.firstElementChild.src === a6.firstElementChild.src) {
      console.log("1");
      if (a4.firstElementChild.src === o) {
        winner = 1;
      }
      if (a4.firstElementChild.src === x) {
        winner = 2;
      }}

  }
  if( a7.innerHTML!="" & a8.innerHTML!="" & a9.innerHTML!=""){
    console.log("checking a3");
    if( a7.firstElementChild.src === a8.firstElementChild.src & a8.firstElementChild.src === a9.firstElementChild.src) {
      console.log("1");
      if (a7.firstElementChild.src === o) {
        winner = 1;
      }
      if (a7.firstElementChild.src === x) {
        winner = 2;
      }}

  }
  if( a1.innerHTML!="" & a4.innerHTML!="" & a7.innerHTML!=""){
    console.log("checking 2");
    if( a1.firstElementChild.src === a4.firstElementChild.src & a4.firstElementChild.src === a7.firstElementChild.src) {
      console.log("1");
      if (a1.firstElementChild.src === o) {
        winner = 1;
      }
      if (a1.firstElementChild.src === x) {
        winner = 2;
      }}

  }
  if( a2.innerHTML!="" & a5.innerHTML!="" & a8.innerHTML!=""){
    console.log("checking 2");
    if( a2.firstElementChild.src === a5.firstElementChild.src & a8.firstElementChild.src === a5.firstElementChild.src) {
      console.log("1");
      if (a1.firstElementChild.src === o) {
        winner = 1;
      }
      if (a1.firstElementChild.src === x) {
        winner = 2;
      }}

  }
  if( a3.innerHTML!="" & a6.innerHTML!="" & a9.innerHTML!=""){
    console.log("checking 2");
    if( a3.firstElementChild.src === a6.firstElementChild.src & a6.firstElementChild.src === a9.firstElementChild.src) {
      console.log("1");
      if (a3.firstElementChild.src === o) {
        winner = 1;
      }
      if (a3.firstElementChild.src === x) {
        winner = 2;
      }}

  }
  if( a1.innerHTML!="" & a5.innerHTML!="" & a9.innerHTML!=""){
    console.log("checking 4");
    if( a1.firstElementChild.src === a5.firstElementChild.src & a5.firstElementChild.src === a9.firstElementChild.src) {
      console.log("1");
      if (a1.firstElementChild.src === o) {
        winner = 1;
      }
      if (a1.firstElementChild.src === x) {
        winner = 2;
      }}

  }
  if( a3.innerHTML!="" & a5.innerHTML!="" & a7.innerHTML!=""){
    console.log("checking 2");
    if( a3.firstElementChild.src === a5.firstElementChild.src & a3.firstElementChild.src === a7.firstElementChild.src) {
      console.log("1");
      if (a7.firstElementChild.src === o) {
        winner = 1;
      }
      if (a7.firstElementChild.src === x) {
        winner = 2;
      }}

  }



  console.log("checked 1");
  console.log("final checked "+ winner);
  if (winner === 1) {
    console.log("p1");
    document.getElementById("result").innerText = player1 + " : is winner";
    document.getElementById("result").style.display = "block";
    s=0;
    document.getElementById("bt1").style.display="none";
    document.getElementById("bt2").style.display="none";
  }
  else if (winner ===2) {
    console.log("p2");
    document.getElementById("result").innerText = player2 + " : is winner";
    document.getElementById("result").style.display = "block";
    s=0;
    document.getElementById("bt1").style.display="none";
    document.getElementById("bt2").style.display="none";
  }
  else if(a==10){

    document.getElementById("result").innerText = "Match Draw";
    document.getElementById("result").style.display = "block";
    document.getElementById("bt1").style.display="none";
    document.getElementById("bt2").style.display="none";
  }
}
export default App;
