(function(){'use strict';const{basicSetup,EditorView}=CM["codemirror"];const{python,pythonLanguage,scopeCompletionSource}=CM["@codemirror/lang-python"];window.view=new EditorView({doc:`function hello(who = "world") {
  console.log(\`Hello, \${who}!\`)
}`,extensions:[basicSetup,python(),pythonLanguage.data.of({autocomplete:scopeCompletionSource(globalThis)})],parent:document.querySelector("#editor")});})();
