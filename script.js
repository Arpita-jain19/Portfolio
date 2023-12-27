document.getElementById('downloadBtn').addEventListener('click',function()
{
    var fileURL='C:\Users\Hp\OneDrive\Documents\Full stack Development\Projects\Portfolio\ArpitaJainResume (4).pdf'
    var downloadLink=document.createElement('a');
    downloadLink.href=fileURL;
    downloadLink.download='ArpitaJainResume (4).pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
})