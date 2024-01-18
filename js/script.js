document.getElementById("luas").onclick = function() {hitungLuas()};

function hitungLuas() {
    var sisi = document.getElementById("sisi1").value;
    var hasil = sisi*sisi;
    if (sisi!=0){
        document.getElementById("hasilLuas").innerHTML = "L = S x S" ;
        document.getElementById("hasilLuas1").innerHTML = "L = "+ sisi + " x " + sisi ;
        document.getElementById("hasilLuas2").innerHTML = "L = "+ hasil ;
    }
}

document.getElementById("keliling").onclick = function() {hitungKeliling()};

function hitungKeliling() {
    var sisi = document.getElementById("sisi1").value;
    var hasil = 4*sisi;
    if (sisi != 0){
      document.getElementById("hasilKeliling").innerHTML = "K = 4 x S" ;
      document.getElementById("hasilKeliling1").innerHTML = "K = 4" + " x " + sisi ;
      document.getElementById("hasilKeliling2").innerHTML = "K = "+ hasil ;
  }
}
document.getElementById("reset").onclick = function() {resetBox()};

function resetBox(){
    document.getElementById("form1").reset();

    document.getElementById("hasilKeliling").innerHTML = " ";
    document.getElementById("hasilKeliling1").innerHTML = " ";
    document.getElementById("hasilKeliling2").innerHTML = " ";

    document.getElementById("hasilLuas").innerHTML = " ";
    document.getElementById("hasilLuas1").innerHTML = " ";
    document.getElementById("hasilLuas2").innerHTML = " ";
}