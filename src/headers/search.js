import React, { Component } from "react";
import './headers.css';

class FileReader extends Component {
  
	constructor(props) {
	    super(props);

	    this.state = {
	      files: [],
	    };

	    this.handleFileSelect = this.handleFileSelect.bind(this);
    }

  handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  handleFiles(filelist) {
  	for(let i=0; i < filelist.length; i++) {
  		this.state.files.push(filelist[i]);
  	}
  }

  componentDidMount() {
  	//this.state.files.addEventListener('change', this.handleFileSelect);
  }

  componentWillUnmount() {
  }

  render() {
    return(
    	<div id="filewrapper">
    	  <input type="file" id="files" name="files[]" onchange="handleFiles(this.files)" multiple />
		  <output id="list"></output>
		</div>
    );
  }
}


const Search = () => {
  return (
	<div className="searchcontainer">
		<FileReader />
	</div>
  );

};

export default Search;
