function proses (){
    let jamKerja = document.form.jam.value
    let upah = document.form.upah.value
    let anak = document.form.anak.value

    let gaji = (upah * jamKerja) * 20
    let tAnak = (0.1 * anak) * gaji
    let totalGaji = gaji + tAnak
    let pph = totalGaji * 0.1
    let gajiBersih = totalGaji - pph

    document.form.gaji.value = "Rp. "+ gaji
    document.form.tanak.value = "Rp. "+ tAnak
    document.form.totalgaji.value = "Rp. "+ totalGaji
    document.form.pph.value = "Rp. "+ pph
    document.form.gajibersih.value = "Rp. "+ gajiBersih
}
