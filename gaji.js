function proses (){
    let jamKerja = document.form.jam.value
    let upah = document.form.upah.value
    let anak = document.form.anak.value
    let tahunMasuk = document.form.tahunMasuk.value

    if (anak > 2) anak = 2;

    let gaji = (upah * jamKerja) * 20
    let tAnak = (0.1 * anak) * gaji
    let lamaKerja = 2022 - tahunMasuk
    let tLamaKerja = lamaKerja * 100000
    let totalGaji = gaji + tAnak + tLamaKerja
    let pph = totalGaji * 0.1
    let gajiBersih = totalGaji - pph

    document.form.gaji.value = "Rp. "+ gaji
    document.form.tanak.value = "Rp. "+ tAnak
    document.form.lamakerja.value = lamaKerja + " Tahun"
    document.form.tlamakerja.value = "Rp. " + tLamaKerja
    document.form.totalgaji.value = "Rp. "+ totalGaji
    document.form.pph.value = "Rp. "+ pph
    document.form.gajibersih.value = "Rp. "+ gajiBersih
}
