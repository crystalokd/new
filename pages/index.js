import React, { useRef } from 'react';
import { render } from 'react-dom'

import EmailEditor from 'react-email-editor';

<script src="//editor.unlayer.com/embed.js"></script>


const editor = unlayer.createEditor({
  id: 'editor-container',
  projectId: 1234,
  displayMode: 'email'
})

editor.loadDesign({})
editor.exportHtml(function(data) { })


const App = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  unlayer.loadDesign({
    html: '<html><body><div>This is a legacy HTML template.</div></body></html>',
    classic: true
  });

  const loadHtml = () => {
    emailEditorRef.current.editor.loadHtml((data) => {
      const { design, html } = data;
      console.log('loadHtml', html);
    });
  };

  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Create Template</button>
       </div>
      <div>
        <button onClick={loadHtml}>Edit Template</button>
      </div>
      <div>
        <button onClick={exportHtml}>Save Template</button>
      </div>
       
      <EmailEditor
        ref={emailEditorRef}
        loadHtml={loadHtml}
        onReady={onReady}
      />
    </div>
  );
};

export default App;
