import React, { Component } from 'react';

class PdfDisplay extends Component {
  render() {
    return (
      <div className={'pdf'}>
        <object data="http://www.pdf995.com/samples/pdf.pdf" type="application/pdf" className={'pdf-object'}>
            {/* alt : <a href="bookingconfirmation.pdf">PDF TITLE</a> */}
        </object>
      </div>
    );
  }
}

export default PdfDisplay;