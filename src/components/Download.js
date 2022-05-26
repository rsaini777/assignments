import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Download({rootid}) {
    const DownloadPage=()=>{
        html2canvas(document.querySelector(`#${rootid}`)).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 15, 40);
            pdf.save("download.pdf"); 
        });
    }
  return (
    <>
        <button className='mx-3' onClick={DownloadPage}>Download</button>
    </>
  )
}

export default Download